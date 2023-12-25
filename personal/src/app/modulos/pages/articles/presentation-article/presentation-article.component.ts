import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticlePost } from '../../../shared/models/article-post';
import { ArticleService } from '../service/article.service';
import {CommonModule} from "@angular/common";
import {ArticleRoutingModule} from "../article-routing.module";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-presentation-article',
  templateUrl: './presentation-article.component.html',
  styleUrls: ['./presentation-article.component.scss'],
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
export default class PresentationArticleComponent implements OnInit {
  listArticle!: ArticlePost[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {
    this.articleService.getArticles().subscribe({
      next: value => {
        this.listArticle = value as ArticlePost[];
      },
      error: err => console.error(err)
    })
  }

  getDescription(article: ArticlePost) {
    if(article.description[0].content.length > 147) {
      return `${article.description[0].content.substring(0, 147)}...`;
    }

    return article.description;
  }

  redirectToArticle(id: number) {
    this.router.navigate([id], { relativeTo: this.route });
  }
}
