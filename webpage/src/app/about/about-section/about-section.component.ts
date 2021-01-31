import { Component } from '@angular/core';
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
}
