import { Component, OnInit } from '@angular/core';

import { Constantes } from '../../../../Utils/Constantes';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

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
