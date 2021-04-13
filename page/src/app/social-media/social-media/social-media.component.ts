import { Component, Input, OnInit } from '@angular/core';
import { Constantes } from 'src/utils/Constantes';
import { SocialMediaModel } from 'src/model/social-media.model';

@Component({
  selector: 'social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit{

  @Input()
  inputSocialMedia: string;

  socialMedia: SocialMediaModel = new SocialMediaModel();

  constructor() { }

  ngOnInit(): void {
    this.selectSocialMedia();
  }

  selectSocialMedia() {
    switch (this.inputSocialMedia) {
      case 'instagram':
        this.socialMedia.linkSocialMedia = Constantes.LINK_INSTAGRAM;
        this.socialMedia.pathImageWhite = Constantes.PATH_ICON_WHITE_INSTAGRAM;
        this.socialMedia.pathImageBlack = Constantes.PATH_ICON_BLACK_INSTAGRAM;
        break;
      case 'linkedin':
        this.socialMedia.linkSocialMedia = Constantes.LINK_LINKEDIN;
        this.socialMedia.pathImageWhite = Constantes.PATH_ICON_WHITE_LINKEDIN;
        this.socialMedia.pathImageBlack = Constantes.PATH_ICON_BLACK_LINKEDIN;
        break;
      case 'github':
        this.socialMedia.linkSocialMedia = Constantes.LINK_GITHUB;
        this.socialMedia.pathImageWhite = Constantes.PATH_ICON_WHITE_GITHUB;
        this.socialMedia.pathImageBlack = Constantes.PATH_ICON_BLACK_GITHUB;
        break;
        case 'email':
          this.socialMedia.linkSocialMedia = Constantes.PERSONAL_EMAIL;
          this.socialMedia.pathImageWhite = Constantes.PATH_ICON_WHITE_EMAIL;
          this.socialMedia.pathImageBlack = Constantes.PATH_ICON_BLACK_EMAIL;
          break;
    }
  }

}
