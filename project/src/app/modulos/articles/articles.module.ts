import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article/article.component';
import { ViewArticleComponent } from './view-article/view-article.component';
import { ArticleRoutingModule } from './article-routing.module';



@NgModule({
  declarations: [
    ArticleComponent,
    ViewArticleComponent
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule
  ]
})
export class ArticlesModule { }
