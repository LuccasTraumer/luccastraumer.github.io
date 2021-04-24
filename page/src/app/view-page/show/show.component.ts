import { Component } from '@angular/core';

@Component({
  selector: 'show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent {

  isDarkModeOn: boolean;

  constructor() {
  }

  receiveMode($event) {
    this.isDarkModeOn = $event;
  }
}
