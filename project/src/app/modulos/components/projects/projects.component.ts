import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constantes } from '../../../utils/constantes';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  constructor(private router: Router) { }

  redirectArticle(event: any) {
    this.router.navigate([Constantes.PATH_ARTICLES])
  }

  redirectToWork(event: any) {
    this.router.navigate([Constantes.PATH_WORKS]);
  }
}
