import { Component, OnInit } from '@angular/core';
import {Constantes} from "../../utils/Constantes";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  readonly CONSTANTES = Constantes;

  constructor() { }

  ngOnInit(): void {
  }

}
