import { Component, OnInit } from '@angular/core';
import { Constantes } from 'src/Utils/Constantes';

@Component({
  selector: 'profile',
  templateUrl: './profile-section.component.html',
  styleUrls: ['./profile-section.component.css']
})
export class ProfileSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  bgImage() {
    return Constantes.backgroundImageHead;
  }

}
