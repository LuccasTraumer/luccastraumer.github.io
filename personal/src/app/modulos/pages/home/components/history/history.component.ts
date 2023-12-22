import { Component, Input } from '@angular/core';
import { HistorySection } from '../../main/model/history-section';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {

  @Input()
  historySection!: HistorySection;

  constructor() { }

}
