import { ViewportScroller } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'hamburguer-menu',
  templateUrl: './hamburguer-menu.component.html',
  styleUrls: ['./hamburguer-menu.component.scss']
})
export class HamburguerMenuComponent implements OnInit {
  @Output() mode = new EventEmitter<boolean>();

  setDark = false;

  menuIsOpen: boolean = false;

  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  onClickScroll(elementId: string) {
    this.viewportScroller.scrollToAnchor(elementId);
    // this.clickMenu()
  }

  receiveMode($event) {
    this.toggleDarkTheme();
  }

  toggleDarkTheme() {
    this.setDark = !this.setDark;
    this.mode.emit(this.setDark);
  }
}
