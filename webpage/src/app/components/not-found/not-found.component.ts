import { Component, OnInit } from '@angular/core';
import { Constantes } from 'src/Utils/Constantes';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imgNotFound() {
    return Constantes.iconNotFoundPage;
  }

}
