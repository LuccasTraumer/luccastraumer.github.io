import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-hamburguer-menu',
  templateUrl: './hamburguer-menu.component.html',
  styleUrls: ['./hamburguer-menu.component.scss']
})
export class HamburguerMenuComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller) { }
  @Output()
  fecharMenu = new EventEmitter<boolean>();

  ngOnInit(): void {
  }

  onClickScroll(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
    this.fecharMenu.emit(false);
  }
}
