import { Component, Input } from '@angular/core';
import { WelcomeSection } from '../../features/view/main/model/welcome-section';
import {CloudinaryImage} from "@cloudinary/url-gen";
import {scale} from "@cloudinary/url-gen/actions/resize";
import {format, quality} from "@cloudinary/url-gen/actions/delivery";
import {auto} from "@cloudinary/url-gen/qualifiers/dpr";

@Component({
  selector: 'app-wellcome',
  templateUrl: './wellcome.component.html',
  styleUrls: ['./wellcome.component.scss']
})
export class WellcomeComponent {
  defaultImage = 'https://res.cloudinary.com/dfixlnbhd/image/upload/v1691356003/t_yi87h4.webp';
  image = [
    'https://res.cloudinary.com/dfixlnbhd/image/upload/v1691356003/t_yi87h4.webp'
  ];

  @Input()
  welcomeData!: WelcomeSection;

  constructor() {
    const image = new CloudinaryImage("c6b7563be89b2a24ef659ac039f6a39f")
      .resize(scale().width(1000))
      .delivery(quality(auto()))
      .delivery(format(auto()));

    console.warn(image);
  }

}
