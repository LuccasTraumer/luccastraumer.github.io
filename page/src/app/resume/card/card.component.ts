import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../model/card';
import { CardJob } from '../model/card-job';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  card: any;

  constructor() { }

  ngOnInit(): void {
  }

}
