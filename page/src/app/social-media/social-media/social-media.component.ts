import { Component, Input } from '@angular/core';
import { Constantes } from 'src/app/Constantes';

@Component({
  selector: 'social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent {

  @Input()
  socialMedia: string;

  pathImage: string;
  linkSocialMedia: string;

  constructor() {
    switch (this.socialMedia) {
      case 'instagram':
        this.linkSocialMedia = Constantes.LINK_INSTAGRAM;
        break;
      case 'email':
        this.linkSocialMedia = Constantes.PERSONAL_EMAIL;
        break;
      case 'linkedin':
        this.linkSocialMedia = Constantes.LINK_LINKEDIN;
        break;
      case 'github':
        this.linkSocialMedia = Constantes.LINK_GITHUB;
        break;
    }
  }

}
