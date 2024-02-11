import {ChangeDetectionStrategy, Component, EventEmitter, inject, Input, OnInit, Output} from '@angular/core';
import {CardInterfaceProps} from './card.interface.props';
import {LucideAngularModule} from "lucide-angular";
import {CommonModule} from "@angular/common";
import {CdnImageService} from "../services/cdn-image.service";
import {CloudinaryImage} from "@cloudinary/url-gen";
import {fill} from "@cloudinary/url-gen/actions/resize";
import {CloudinaryModule} from "@cloudinary/ng";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  standalone: true,
  imports: [
    LucideAngularModule,
    CommonModule,
    CloudinaryModule
  ],
  providers: [

  ],
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class CardComponent implements CardInterfaceProps, OnInit {
  private cdnImage = inject(CdnImageService);
  @Input() image?: string;

  @Input() title?: string;

  @Input() link?: string;

  @Input() contentLink?: string;

  @Output() eventEmitter = new EventEmitter<any>();

  img!: CloudinaryImage;

  redirectToProject() {
    this.eventEmitter.next(this.title?.toLowerCase());
  }

  ngOnInit(): void {
    this.img = this.cdnImage.getCloudNary().image('CIT_TRANSPARENT').resize(fill());
  }
}
