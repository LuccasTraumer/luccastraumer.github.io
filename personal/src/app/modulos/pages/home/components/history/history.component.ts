import {ChangeDetectionStrategy, Component, inject, OnDestroy, WritableSignal} from '@angular/core';
import {HistorySection} from '../../../../shared-ui/models/history-section';
import {HomeService} from "../../main/service/home.service";
import {LoaderService} from "../../../../shared-ui/loader/service/loader.service";
import {CommonModule} from "@angular/common";
import LoaderComponent from "../../../../shared-ui/loader/loader.component";
import {IconeComponent} from "./icone/icone.component";
import {toSignal} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  standalone: true,
  imports: [
    CommonModule,
    LoaderComponent,
    IconeComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class HistoryComponent implements OnDestroy {
  protected historySection!: WritableSignal<HistorySection>;

  protected homeService = inject(HomeService);
  private loaderService = inject(LoaderService);

  constructor() {
    this.loaderService.setStateLoader(true);

    // @ts-ignore
    this.historySection = toSignal(this.homeService.getHistorySection());
  }
  ngOnDestroy(): void {
    this.homeService.setHistorySection(this.historySection());
  }
}
