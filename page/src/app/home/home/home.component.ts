import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public sentence: string;
  readonly sentences = ['Angular Developer', 'Fullstack Developer', 'Javascript & Typescript', 'in love for mobile dev', 'in love for frontend dev'];

  private index: number = 1;
  private timer = 5000;

  now:number;

  constructor() {
    this.sentence = this.sentences[this.index];
    setInterval(() => {
      console.log(this.index)
      this.sentence = this.index > this.sentences.length-1 ? this.sentences[this.index = 0] : this.sentences[this.index++];
    }, 3000);
  }
}
