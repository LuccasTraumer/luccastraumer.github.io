import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-static-header',
  templateUrl: './static-header.component.html',
  styleUrls: ['./static-header.component.css']
})
export class StaticHeaderComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  onClickScroll(elementId: string) {
    this.viewportScroller.scrollToAnchor(elementId);
  }

}
