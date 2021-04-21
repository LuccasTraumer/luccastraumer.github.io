import { Component, Input, EventEmitter, OnChanges, SimpleChanges, Output, AfterContentInit, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public sentence: string;
  readonly sentences = ['Angular Developer', 'Fullstack Developer', 'Javascript & Typescript', 'in love for mobile dev', 'in love for frontend dev'];
  private index: number = 1;

  @Input()
  isDarkMode: boolean = false;

  constructor() {
    this.sentence = this.sentences[this.index];
    setInterval(() => {
      this.sentence = this.index > this.sentences.length-1 ? this.sentences[this.index = 0] : this.sentences[this.index++];
    }, 3000);
  }


}
