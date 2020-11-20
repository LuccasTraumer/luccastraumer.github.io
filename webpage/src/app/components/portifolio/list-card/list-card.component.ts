import { Component, OnInit } from '@angular/core';
import { Constantes } from './../../../../Utils/Constantes';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})
export class ListCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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
