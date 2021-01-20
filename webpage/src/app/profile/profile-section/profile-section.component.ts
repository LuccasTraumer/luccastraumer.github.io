import { Component } from '@angular/core';
import { Constantes } from 'src/Utils/Constantes';

@Component({
  selector: 'profile',
  templateUrl: './profile-section.component.html',
  styleUrls: ['./profile-section.component.css']
})
export class ProfileSectionComponent {

  constructor() { }

  bgImage() {
    return Constantes.backgroundImageHead;
  }

}
