import {ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit, signal} from '@angular/core';
import {HistorySection} from '../../../../shared-ui/models/history-section';
import {HomeService} from "../../main/service/home.service";
import {LoaderService} from "../../../../shared-ui/loader/service/loader.service";
import {CommonModule} from "@angular/common";
import LoaderComponent from "../../../../shared-ui/loader/loader.component";
import {finalize, Subject, takeUntil} from "rxjs";
import {IconeComponent} from "./icone/icone.component";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  standalone: true,
  imports: [
    CommonModule,
    LoaderComponent,
    IconeComponent
  ],
  providers: [
    LoaderService,
    HomeService
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class HistoryComponent implements OnInit, OnDestroy {
  private ngDestroy$ = new Subject();
  private loaderService = inject(LoaderService);
  protected homeService = inject(HomeService);
  protected historySection = signal({} as HistorySection);
  protected paragraph = signal('');

  ngOnInit(): void {
    this.loaderService.setStateLoader(true);
    if (this.homeService.getSectionStore().value.historySection != null) {
      this.homeService.getSectionStore()
        .pipe(
          takeUntil(this.ngDestroy$)
        )
        .subscribe(value => {
        this.historySection.set(value.historySection);
        this.paragraph.set(value.historySection.paragraph[0]);
      });
    } else {
      this.homeService.getHistorySection()
        .pipe(
          finalize(() => this.loaderService.setStateLoader(false)),
          takeUntil(this.ngDestroy$)
        )
        .subscribe({
          next: (value: any) => {
            this.historySection.set(value.historySection);
            this.paragraph.set(value.historySection.paragraph[0]);
            value.historySection ? this.homeService.setHistorySection(value.historySection) : null;
          }
        }
      );
    }
  }

  ngOnDestroy(): void {
    this.ngDestroy$.next(true);
    this.ngDestroy$.complete();
  }
}
