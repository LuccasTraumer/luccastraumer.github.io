import { Component, Input, OnInit } from '@angular/core';
import { RepositoryModel } from '../../../model/repository-model';


@Component({
  selector: 'card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.scss']
})
export class CardProjectComponent implements OnInit{

  @Input()
  repository: RepositoryModel;

  longDescription: boolean = true;

  constructor() {}
  ngOnInit(): void {
    console.log(this.repository.image)
  }

  clickButton() {
    this.longDescription = !this.longDescription;
  }
}
