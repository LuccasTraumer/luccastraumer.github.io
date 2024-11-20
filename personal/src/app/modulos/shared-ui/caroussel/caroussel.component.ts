import {ChangeDetectionStrategy, Component, inject, Input, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {CloudinaryModule} from "@cloudinary/ng";
import ButtonComponent from "../button/button.component";
import {CdnImageService} from "../../services/cdn-image.service";
import {CloudinaryImage} from "@cloudinary/url-gen";
import {fill} from "@cloudinary/url-gen/actions/resize";

@Component({
  selector: 'app-caroussel',
  templateUrl: './caroussel.component.html',
  styleUrls: ['./caroussel.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    CloudinaryModule,
    ButtonComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarousselComponent implements OnInit {
  private limitTimeMS = 4000;
  private cdnImage = inject(CdnImageService);
  @Input() listImages!: string[];
  img!: CloudinaryImage;
  visibleImage = 0;

  ngOnInit(): void {
    this.img = this.cdnImage.getCloudNary().image('CIT_TRANSPARENT').resize(fill());
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

  getCloudImage(nameImage: string): CloudinaryImage {
    return this.cdnImage.getCloudNary().image(nameImage).resize(fill());
  }
}
