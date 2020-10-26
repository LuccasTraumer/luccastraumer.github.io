import { Component, OnInit } from '@angular/core';

import { Constantes } from '../../../../Utils/Constantes';
@Component({
  selector: 'app-rounded-image',
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
