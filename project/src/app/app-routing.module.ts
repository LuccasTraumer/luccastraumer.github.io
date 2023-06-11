import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Constantes } from './utils/constantes';

const routes: Routes = [
  {
    path: Constantes.PATH_HOME,
    loadChildren: () => import('src/app/modulos/view/view.module').then(module => module.ViewModule),
    pathMatch: 'full'
  },

  {
    path: Constantes.PATH_WORKS,
    loadChildren: () => import('src/app/modulos/work/work.module').then(module => module.WorkModule)
  },
  {
    path: Constantes.PATH_ARTICLES,
    loadChildren: () => import('src/app/modulos/articles/articles.module').then(module => module.ArticlesModule)
  },
  {
    path: Constantes.PATH_RESUME,
    loadChildren: () => import('src/app/modulos/resume/resume.module').then(module => module.ResumeModule)
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
