import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'footer-section',
  templateUrl: './footer-section.component.html',
  styleUrls: ['./footer-section.component.css']
})
export class FooterSectionComponent {

  constructor(private viewportScroller: ViewportScroller) { }

  onClickScroll(elementId: string) {
    console.log(this.viewportScroller.scrollToAnchor(elementId));

    this.viewportScroller.scrollToAnchor(elementId);
  }

  getYear() {
    return new Date().getFullYear();
  }

}
