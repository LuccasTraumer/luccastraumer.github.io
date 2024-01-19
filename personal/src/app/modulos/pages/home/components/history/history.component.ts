import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {HistorySection} from '../../main/model/history-section';
import {HomeService} from "../../main/service/home.service";
import {LoaderService} from "../../../../shared/loader/service/loader.service";
import {CommonModule} from "@angular/common";
import LoaderComponent from "../../../../shared/loader/loader.component";

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
  ],
  // TODO: Revisar a possibilidade de incluir o change detection
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export default class HistoryComponent implements OnInit {
  historySection!: HistorySection;

  private loaderService = inject(LoaderService);
  homeService = inject(HomeService);

  constructor() {
    this.loaderService.setStateLoader(true);
    this.homeService.getHistorySection().subscribe(
        {
          next: (value: any) => {
            this.historySection = value.historySection
          },
          complete: () => this.loaderService.setStateLoader(false)
        }
    );
  }

  ngOnInit(): void {

  }

}
