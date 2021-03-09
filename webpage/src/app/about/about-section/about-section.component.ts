import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Constantes } from 'src/Utils/Constantes';

@Component({
  selector: 'about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css']
})
export class AboutSectionComponent {

  constructor() { }

  getIconInfo() {
    return Constantes.iconInfo;
  }

  getLinkPageCotuca() {
    return Constantes.linkPageCotuca;
  }

  getLinkPageCiandt() {
    return Constantes.linkPageCiandt;
  }
}
