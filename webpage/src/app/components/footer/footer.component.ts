import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  onClickScroll(elementId: string) {
    console.log(this.viewportScroller.scrollToAnchor(elementId))

    this.viewportScroller.scrollToAnchor(elementId);
  }

  getYear() {
    return new Date().getFullYear();
  }
}
