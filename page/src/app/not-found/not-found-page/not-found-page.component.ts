import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.css']
})
export class NotFoundPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imgNotFound() {
    return 'Constantes.iconNotFoundPage';
  }

}
