import { Component, Input, OnInit } from '@angular/core';
import { RepositoryModel } from '../../../model/repository-model';


@Component({
  selector: 'card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.scss']
})
export class CardProjectComponent {

  @Input()
  repository: RepositoryModel;

  longDescription: boolean = true;

  constructor() { }

  clickButton(event) {
    this.longDescription = !this.longDescription;
  }
}
