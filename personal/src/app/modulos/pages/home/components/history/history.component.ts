import {Component, inject, Input, OnInit} from '@angular/core';
import { HistorySection } from '../../main/model/history-section';
import {HomeService} from "../../main/service/home.service";
import {HomeData} from "../../main/model/home-data";
import {LoaderService} from "../../../../shared/loader/service/loader.service";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  historySection!: HistorySection;

  private loaderService = inject(LoaderService);
  homeService = inject(HomeService);

  constructor() {
    this.loaderService.setStateLoader(true);
    this.homeService.getHistorySection().subscribe(
        {
          next: (value: HomeData) => {
            this.historySection = value.historySection
          },
          complete: () => this.loaderService.setStateLoader(false)
        }
    );
  }

  ngOnInit(): void {

  }

}
