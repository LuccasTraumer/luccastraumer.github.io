import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'switch-toggle',
  templateUrl: './switch-toggle.component.html',
  styleUrls: ['./switch-toggle.component.scss']
})
export class SwitchToggleComponent implements OnInit {
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
