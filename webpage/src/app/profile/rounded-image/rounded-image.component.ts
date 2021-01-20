import { Component } from '@angular/core';
import { Constantes } from 'src/Utils/Constantes';

@Component({
  selector: 'rounded-image',
  templateUrl: './rounded-image.component.html',
  styleUrls: ['./rounded-image.component.css']
})
export class RoundedImageComponent {

  constructor() { }

  personalImage() {
    return Constantes.myPersonalImage;
  }


}
