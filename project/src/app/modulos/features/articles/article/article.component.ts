import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../service/article.service';
import { DataArticleService } from '../service/data-article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  constructor(private articleService: ArticleService, private dataService: DataArticleService) { }

  ngOnInit(): void {
    this.articleService.getArticles().subscribe({
      next: value => {
        this.dataService.setValueData(value);
      },
      error: err => console.error(err)
    })
  }
}
