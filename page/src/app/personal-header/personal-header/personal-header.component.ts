import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'personal-header',
  templateUrl: './personal-header.component.html',
  styleUrls: ['./personal-header.component.scss']
})
export class PersonalHeaderComponent {

  constructor(private viewportScroller: ViewportScroller) { }

  onClickScroll(elementId: string) {
    this.viewportScroller.scrollToAnchor(elementId);
  }
}
