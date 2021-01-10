import { Component, OnInit } from '@angular/core';
import { Constantes } from 'src/Utils/Constantes';

@Component({
  selector: 'contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css']
})
export class ContactSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getBgImage() {
    return Constantes.backgroundImageContact;
  }

  getIconContact() {
    return Constantes.iconContact;
  }
}
