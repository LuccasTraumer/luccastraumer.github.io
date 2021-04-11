import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  readonly sentences = ['Angular Developer', 'Fullstack Developer', 'Javascript & Typescript'];
  index: number = 0;

  public sentence: string;
  constructor() { }

}
