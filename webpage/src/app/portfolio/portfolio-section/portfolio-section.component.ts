import { Component, OnInit } from '@angular/core';
import { Constantes } from 'src/Utils/Constantes';

@Component({
  selector: 'portfolio-section',
  templateUrl: './portfolio-section.component.html',
  styleUrls: ['./portfolio-section.component.css']
})
export class PortfolioSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getIconPort() {
    return Constantes.iconPortfolio;
  }

}
