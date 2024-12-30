import {ChangeDetectionStrategy, Component, inject, Input, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from "@angular/common";
import ButtonComponent from "../button/button.component";

@Component({
  selector: 'app-caroussel',
  templateUrl: './caroussel.component.html',
  styleUrls: ['./caroussel.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    NgOptimizedImage
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarousselComponent implements OnInit {
  @Input() listImages!: string[];
  img!: string;
  visibleImage = 0;

  ngOnInit(): void {
    this.img = 'CIT_TRANSPARENT';
  }

  goForPreveiusImage() {
    this.visibleImage = this.visibleImage -1;
    if (this.visibleImage < 0) {
      this.visibleImage = 0;
    }
  }

  goForNextImage() {
    this.visibleImage = this.visibleImage +1;
    //TODO: Efetuar um timer para passar a imagem de forma automarica
    if (this.visibleImage > this.listImages.length-1) {
      this.visibleImage = 0;
    }
  }

  getCloudImage(nameImage: string): string {
    return './assets/images/' + nameImage;
  }
}
