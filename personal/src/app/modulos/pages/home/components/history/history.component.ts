import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {HistorySection} from '../../../../shared/models/history-section';
import {HomeService} from "../../main/service/home.service";
import {LoaderService} from "../../../../shared/loader/service/loader.service";
import {CommonModule} from "@angular/common";
import LoaderComponent from "../../../../shared/loader/loader.component";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
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
export default class HistoryComponent implements OnInit, OnDestroy {
  private ngDestroy$ = new Subject();
  private loaderService = inject(LoaderService);
  homeService = inject(HomeService);
  historySection!: HistorySection;

  ngOnInit(): void {
    this.loaderService.setStateLoader(true);
    if (this.homeService.getSectionStore().value.historySection) {
      this.homeService.getSectionStore().pipe(takeUntil(this.ngDestroy$)).subscribe(value => {
        this.historySection = value.historySection;
      });
    } else {
      this.homeService.getHistorySection().pipe(takeUntil(this.ngDestroy$)).subscribe(
        {
          next: (value: any) => {
            this.historySection = value.historySection
            this.homeService.setHistorySection(this.historySection);
          },
          complete: () => this.loaderService.setStateLoader(false)
        }
      );
    }
  }

  ngOnDestroy(): void {
    this.ngDestroy$.next(true);
    this.ngDestroy$.complete();
  }
}
