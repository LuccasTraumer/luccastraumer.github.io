import { Component, OnInit } from '@angular/core';
import { Constantes } from 'src/Utils/Constantes';

@Component({
  selector: 'about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css']
})
export class AboutSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getIconInfo() {
    return Constantes.iconInfo;
  }
}
