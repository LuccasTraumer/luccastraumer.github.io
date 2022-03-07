import { Component, Input, OnInit } from '@angular/core';
import { CardProject } from '../models/card-project';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input()
  projeto: CardProject;

  constructor() { }

  ngOnInit(): void {
  }

}
