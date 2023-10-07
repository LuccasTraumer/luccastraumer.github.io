import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Constantes } from './utils/constantes';
import {ArticleResolver} from "./modulos/features/articles/service/article.resolver";

const routes: Routes = [
  {
    path: Constantes.PATH_HOME,
    loadChildren: () => import('src/app/modulos/features/view/view.module').then(module => module.ViewModule),
    pathMatch: 'full'
  },

  {
    path: Constantes.PATH_WORKS,
    loadChildren: () => import('src/app/modulos/features/work/work.module').then(module => module.WorkModule)
  },
  {
    path: Constantes.PATH_ARTICLES,
    loadChildren: () => import('src/app/modulos/features/articles/articles.module').then(module => module.ArticlesModule),
    resolve: {
      dataArticle: ArticleResolver
    }

  },
  {
    path: Constantes.PATH_RESUME,
    loadChildren: () => import('src/app/modulos/features/resume/resume.module').then(module => module.ResumeModule)
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
