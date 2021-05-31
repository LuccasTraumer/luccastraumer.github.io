import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {
  @Output() mode = new EventEmitter<boolean>();
  setDark = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleDarkTheme() {
    this.setDark = !this.setDark;
    this.mode.emit(this.setDark);
  }

}
