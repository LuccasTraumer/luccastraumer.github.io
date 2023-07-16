import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article/article.component';
import { ViewArticleComponent } from './view-article/view-article.component';
import { ArrayOfComponents, ArticleRoutingModule } from './article-routing.module';
import { PresentationArticleComponent } from './presentation-article/presentation-article.component';



@NgModule({
  declarations: [
    ArticleComponent,
    ViewArticleComponent,
    ArrayOfComponents,
    PresentationArticleComponent
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule
  ]
})
export class ArticlesModule { }
