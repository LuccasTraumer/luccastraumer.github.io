import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { ViewArticleComponent } from './view-article/view-article.component';
import { PresentationArticleComponent } from './presentation-article/presentation-article.component';
import { DataMock } from '../../../utils/data-mock';

const routes: Routes = [
  {
    path: '',
    component: PresentationArticleComponent
  },
  {
    path: 'data-structure',
    component: ViewArticleComponent,
    data: { article: DataMock.LIST_ARTICLE[0] }
  },
  {
    path: 'search-binary',
    component: ViewArticleComponent,
    data: { article: DataMock.LIST_ARTICLE[1] }
  },
  {
    path: 'list-and-array',
    component: ViewArticleComponent,
    data: { article: DataMock.LIST_ARTICLE[2] }
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
export const ArrayOfComponents = [
  ViewArticleComponent,
  ArticleComponent
]
