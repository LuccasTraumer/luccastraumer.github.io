import { Component, OnInit } from '@angular/core';
import { Constantes } from '../../../Utils/Constantes';

@Component({
  selector: 'app-portifolio',
  templateUrl: './portifolio.component.html',
  styleUrls: ['./portifolio.component.css']
})
export class PortifolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getIconPort() {
    return Constantes.iconPortfolio;
  }

}
