import { Component } from '@angular/core';
import { Constantes } from 'src/Utils/Constantes';

@Component({
  selector: 'list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})
export class ListCardComponent {

  constructor() { }

  getLinkAirCnC() {
    return Constantes.linkRepAirCnC;
  }

  getLinkWazeDev() {
    return Constantes.linkRepWazeDev;
  }

  getLinkRemadeWebSite() {
    return Constantes.linkRepRemadeWebSites;
  }

  getLinkTwitterData() {
    return Constantes.linkRepTwitterData;
  }

  getLinkMaiaraMartins() {
    return Constantes.linkRepMaiaraMartins;
  }

}
