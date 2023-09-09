import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article/article.component';
import { ViewArticleComponent } from './view-article/view-article.component';
import { ArrayOfComponents, ArticleRoutingModule } from './article-routing.module';
import { PresentationArticleComponent } from './presentation-article/presentation-article.component';
import { HttpClientModule } from '@angular/common/http';
import { ArticleService } from './service/article.service';



@NgModule({
  declarations: [
    ArticleComponent,
    ViewArticleComponent,
    ArrayOfComponents,
    PresentationArticleComponent
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    HttpClientModule
  ],
  providers: [
    ArticleService
  ]
})
export class ArticlesModule { }
