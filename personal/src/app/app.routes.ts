import { Routes } from '@angular/router';
import {Constantes} from "./modulos/utils/constantes";
import ViewWorkComponent from "./modulos/pages/work/view-work/view-work.component";
import ViewArticleComponent from "./modulos/pages/articles/view-article/view-article.component";

export const routes: Routes = [
  {
    path: Constantes.PATH_HOME,
    loadComponent: () => import('./modulos/pages/home/main/main.component'),
    pathMatch: 'full'
  },
  {
    path: Constantes.PATH_WORKS,
    loadChildren: () => import('./modulos/pages/work/work-routing'),
  },
  {
    path: Constantes.PATH_ARTICLES,
    loadChildren: () => import('./modulos/pages/articles/article-routing.module'),
  },
  {
    path: Constantes.PATH_RESUME,
    loadComponent: () => import('./modulos/pages/resume/resume/resume.component')
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
