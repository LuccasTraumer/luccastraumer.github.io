import { Component, Input, OnInit } from '@angular/core';
import { HistorySection } from '../../features/view/main/model/history-section';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  @Input()
  historySection!: HistorySection;

  constructor() { }

  ngOnInit(): void {
  }

}
