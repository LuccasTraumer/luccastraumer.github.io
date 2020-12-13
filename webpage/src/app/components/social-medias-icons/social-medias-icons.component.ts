import { Component, OnInit } from '@angular/core';
import { Constantes } from 'src/Utils/Constantes';

@Component({
  selector: 'app-social-medias-icons',
  templateUrl: './social-medias-icons.component.html',
  styleUrls: ['./social-medias-icons.component.css']
})
export class SocialMediasIconsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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
