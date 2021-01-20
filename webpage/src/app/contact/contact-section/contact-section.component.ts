import { Component } from '@angular/core';
import { Constantes } from 'src/Utils/Constantes';

@Component({
  selector: 'contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css']
})
export class ContactSectionComponent {

  constructor() { }

  getBgImage() {
    return Constantes.backgroundImageContact;
  }

  getIconContact() {
    return Constantes.iconContact;
  }
}
