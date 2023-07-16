import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-caroussel',
  templateUrl: './caroussel.component.html',
  styleUrls: ['./caroussel.component.scss']
})
export class CarousselComponent {
  visibleImage = 0;

  @Input()
  listImages!: string[];

  goForPreveiusImage() {
    this.visibleImage = this.visibleImage -1;
    if (this.visibleImage < 0) {
      this.visibleImage = 0;
    }
  }

  goForNextImage() {
    this.visibleImage = this.visibleImage +1;
    if (this.visibleImage > this.listImages.length-1) {
      this.visibleImage = 0;
    }
  }
}
