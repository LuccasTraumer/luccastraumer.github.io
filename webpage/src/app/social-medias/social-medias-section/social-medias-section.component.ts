import { Component } from '@angular/core';
import { Constantes } from 'src/Utils/Constantes';

@Component({
  selector: 'social-medias-section',
  templateUrl: './social-medias-section.component.html',
  styleUrls: ['./social-medias-section.component.css']
})
export class SocialMediasSectionComponent {

  constructor() { }

  iconFacebook() {
    return Constantes.iconFacebook;
  }

  iconInstagram() {
    return Constantes.iconInstagram;
  }

  iconTwitter() {
    return Constantes.iconTwitter;
  }

  iconLinkedin() {
    return Constantes.iconLinkedin;
  }

  iconGithub() {
    return Constantes.iconGithub;
  }

  linkFacebook() {
    return Constantes.linkFacebook;
  }

  linkInstagram() {
    return Constantes.linkInstagram;
  }

  linkTwitter() {
    return Constantes.linkTwitter;
  }

  linkLinkedin() {
    return Constantes.linkLinkedin;
  }

  linkGithub() {
    return Constantes.linkGithub;
  }
}
