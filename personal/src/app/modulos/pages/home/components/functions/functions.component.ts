import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import { RoleSection } from '../../../../shared/models/role-section';
import {HomeService} from "../../main/service/home.service";
import {LoaderService} from "../../../../shared/loader/service/loader.service";
import {CommonModule} from "@angular/common";
import LoaderComponent from "../../../../shared/loader/loader.component";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-functions',
  templateUrl: './functions.component.html',
  styleUrls: ['./functions.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    LoaderComponent
  ],
  providers: [
    LoaderService,
    HomeService
  ]
})
export default class FunctionsComponent implements OnInit, OnDestroy {
  private loaderService = inject(LoaderService);
  private ngDestroy$ = new Subject();
  private homeSection = inject(HomeService);
  roleSection!: RoleSection[];

  ngOnInit(): void {
    this.loaderService.setStateLoader(true);

    if (this.homeSection.getSectionStore().value.roleSection) {
      this.homeSection.getSectionStore().pipe(takeUntil(this.ngDestroy$)).subscribe(value => {
        this.roleSection = value.roleSection;
      })
    } else {
      this.homeSection.getRoleSection().pipe(takeUntil(this.ngDestroy$)).subscribe({
        next: (value: any) => {
          this.roleSection = value.roleSection;
          this.homeSection.setRoleSection(this.roleSection);
        },
        complete: () => this.loaderService.setStateLoader(false)
      })
    }
  }

  ngOnDestroy(): void {
    this.ngDestroy$.next(true);
    this.ngDestroy$.complete();
  }

}
