import { Routes } from '@angular/router';
import {Constantes} from "./utils/constantes";
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
    loadComponent: () => import('./modulos/pages/work/work/work.component'),
    children: [
      {
        path: 'ciandt',
        component: ViewWorkComponent
      },
    ]
  },
  // {
  //   path: `${Constantes.PATH_WORKS}/ciandt`,
  //   loadComponent: () => import('./modulos/pages/work/view-work/view-work.component')
  // },
  {
    path: Constantes.PATH_ARTICLES,
    loadComponent: () => import('./modulos/pages/articles/presentation-article/presentation-article.component'),
    children: [
      {
        path: ':id',
        component: ViewArticleComponent,
      },
    ]
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
