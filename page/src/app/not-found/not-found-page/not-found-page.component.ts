<<<<<<< HEAD:webpage/src/app/not-found/not-found-page/not-found-page.component.ts
import { Component } from '@angular/core';
import { Constantes } from 'src/Utils/Constantes';
=======
import { Component, OnInit } from '@angular/core';

>>>>>>> refactory:page/src/app/not-found/not-found-page/not-found-page.component.ts

@Component({
  selector: 'not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.css']
})
export class NotFoundPageComponent {

  constructor() { }

  imgNotFound() {
    return 'Constantes.iconNotFoundPage';
  }

}
