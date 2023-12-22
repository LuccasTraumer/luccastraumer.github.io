import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataArticleService } from '../service/data-article.service';
import { ArticlePost } from '../../../shared/models/article-post';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-presentation-article',
  templateUrl: './presentation-article.component.html',
  styleUrls: ['./presentation-article.component.scss']
})
export class PresentationArticleComponent implements OnInit {
  listArticle!: ArticlePost[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataArticleService,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {
    this.articleService.getArticles().subscribe({
      next: value => {
        this.dataService.setValueData(value);
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

  redirectToArticle(linkPost: string) {
    this.router.navigate([linkPost], { relativeTo: this.route });
  }
}
