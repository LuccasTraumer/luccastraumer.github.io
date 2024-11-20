import {ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit, signal} from '@angular/core';
import {RoleSection} from '../../../../shared-ui/models/role-section';
import {HomeService} from "../../main/service/home.service";
import {LoaderService} from "../../../../shared-ui/loader/service/loader.service";
import {CommonModule} from "@angular/common";
import LoaderComponent from "../../../../shared-ui/loader/loader.component";
import {finalize, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-functions',
  templateUrl: './functions.component.html',
  standalone: true,
  imports: [
    CommonModule,
    LoaderComponent
  ],
  providers: [
    LoaderService,
    HomeService
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class FunctionsComponent implements OnInit, OnDestroy {
  private loaderService = inject(LoaderService);
  private ngDestroy$ = new Subject();
  protected homeSection = inject(HomeService);
  protected firstSection = signal({} as RoleSection);
  protected secondSection = signal({} as RoleSection);

  ngOnInit(): void {
    this.loaderService.setStateLoader(true);

    if (this.homeSection.getSectionStore().value.roleSection) {
      this.homeSection.getSectionStore()
        .pipe(
          finalize(() => this.loaderService.setStateLoader(false)),
          takeUntil(this.ngDestroy$)
        )
        .subscribe(value => {
        this.firstSection.set(value.roleSection[0]);
        this.secondSection.set(value.roleSection[1]);
      })
    } else {
      this.homeSection.getRoleSection()
        .pipe(
          finalize(() => this.loaderService.setStateLoader(false)),
          takeUntil(this.ngDestroy$)
        )
        .subscribe({
        next: (value: any) => {
          this.firstSection.set(value.roleSection[0]);
          this.secondSection.set(value.roleSection[1]);
          value.roleSection ? this.homeSection.setRoleSection(value.roleSection) : null;
        }
      })
    }
  }

  ngOnDestroy(): void {
    this.ngDestroy$.next(true);
    this.ngDestroy$.complete();
  }

}
