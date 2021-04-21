import { Component } from '@angular/core';
import { Constantes } from '../../../Utils/Constantes';

@Component({
  selector: 'building-page',
  templateUrl: './building-page.component.html',
  styleUrls: ['./building-page.component.css']
})
export class BuildingPageComponent {

  constructor() { }

  getIconInBuilding() {
    return Constantes.iconInBuilding;
  }

}
