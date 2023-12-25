import {Component, inject, OnInit} from '@angular/core';
import { Router} from '@angular/router';
import { ArticlePost } from '../../../shared/models/article-post';
import {ArticleService} from "../service/article.service";
import {CommonModule} from "@angular/common";
import {ArticleRoutingModule} from "../article-routing.module";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-home-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ArticleRoutingModule,
    HttpClientModule
  ],
  providers: [
    ArticleService
  ]
})
export default class ViewArticleComponent implements OnInit {
  private route: Router = inject(Router)

  private articleService = inject(ArticleService);
  article!: ArticlePost;

  ngOnInit(): void {
    if (!this.article) {
      this.articleService.getArticleByName(parseInt(this.route.url.split('/')[2])).subscribe({
        next: value => {
          this.article = value;
        }
      })
    }
  }
}
