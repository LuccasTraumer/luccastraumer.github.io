import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('src/app/modulos/view/view.module').then(module => module.ViewModule),
  },
  {
    path: '**',
    redirectTo: ''
  },
  {
    path: 'work',
    loadChildren: () => import('src/app/modulos/work/work.module').then(module => module.WorkModule)
  },
  {
    path: 'articles',
    loadChildren: () => import('src/app/modulos/articles/articles.module').then(module => module.ArticlesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
