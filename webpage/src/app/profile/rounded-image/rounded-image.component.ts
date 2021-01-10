import { Component, OnInit } from '@angular/core';
import { Constantes } from 'src/Utils/Constantes';

@Component({
  selector: 'rounded-image',
  templateUrl: './rounded-image.component.html',
  styleUrls: ['./rounded-image.component.css']
})
export class RoundedImageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  personalImage() {
    return Constantes.myPersonalImage;
  }


}
