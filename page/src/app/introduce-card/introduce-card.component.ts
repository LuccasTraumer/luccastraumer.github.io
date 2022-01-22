import { Component, OnInit } from '@angular/core';
import {Constantes} from "../../utils/Constantes";

@Component({
  selector: 'app-introduce-card',
  templateUrl: './introduce-card.component.html',
  styleUrls: ['./introduce-card.component.scss']
})
export class IntroduceCardComponent implements OnInit {

  redeSociais = Array<DadosRedesSociais>();
  readonly CONSTANTES = Constantes;
  constructor() { }

  ngOnInit(): void {
    this.redeSociais.push(new DadosRedesSociais(this.CONSTANTES.PATH_ICONE_INSTAGRAM,  'Instagram',
      'https://www.instagram.com/luccastraumer/', 'Icone Instragram'));

    this.redeSociais.push(new DadosRedesSociais(this.CONSTANTES.PATH_ICONE_LINKEDIN,  'Linkedin',
      'https://www.linkedin.com/in/lucassjesus/', 'Icone Linkedin'));

    this.redeSociais.push(new DadosRedesSociais(this.CONSTANTES.PATH_ICONE_TWITTER,  'Twitter',
      'https://twitter.com/LuccasTraumer', 'Icone Twitter'));

    this.redeSociais.push(new DadosRedesSociais(this.CONSTANTES.PATH_ICONE_GITHUB,  'Github',
      'https://github.com/LuccasTraumer', 'Icone Github'));
  }
}

class DadosRedesSociais {
  pathImage: string;
  nomeRedeSocial: string;
  linkRedeSocial: string;
  altRedeSocial: string;

  constructor(pathImage: string, nomeRedeSocial: string,
              linkRedeSocial: string, altRedeSocial: string) {
    this.pathImage = pathImage;
    this.nomeRedeSocial = nomeRedeSocial;
    this.linkRedeSocial = linkRedeSocial;
    this.altRedeSocial = altRedeSocial;
  }
}
