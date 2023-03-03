import { Component, OnInit } from '@angular/core';
import { Constantes } from '../../../utils/constantes';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public readonly CONSTANTES = Constantes;

  public readonly CARDS = [
    {
    name: 'E-commerc Landing Page',
    alt: 'e-commerc project landring page',
    path: this.CONSTANTES.ECOMMERC_PAGE
    },
    {
      name: 'Landing Page',
      alt: 'landring page project',
      path: this.CONSTANTES.LANDING_PAGE_IMAGE
    },
    {
      name: 'Card Crypto',
      alt: 'Card Crypto Project',
      path: this.CONSTANTES.CARD_IMAGE
    },
    {
      name: 'Personal Page',
      alt: 'personal page project',
      path: this.CONSTANTES.PERSONAL_PAGE
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
