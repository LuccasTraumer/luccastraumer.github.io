import { Component, OnInit } from '@angular/core';
import { Constantes } from '../../../utils/constantes';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public readonly CONSTANTES = Constantes;

  constructor() { }

  ngOnInit(): void {
  }

}
