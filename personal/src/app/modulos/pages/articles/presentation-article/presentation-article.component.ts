import {Component, inject, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticlePost } from '../../../shared/models/article-post';
import { ArticleService } from '../service/article.service';
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-presentation-article',
  templateUrl: './presentation-article.component.html',
  styleUrls: ['./presentation-article.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ArticleService
  ]
})
export default class PresentationArticleComponent implements OnInit {
  listArticle!: ArticlePost[];

  private router: Router = inject(Router);
  private route: ActivatedRoute = inject(ActivatedRoute);
  private articleService: ArticleService = inject(ArticleService);

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
    console.warn(`Aquiii`)
    this.router.navigate([`articles/${id}`]);
  }
}
