import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { DataArticleService } from '../service/data-article.service';
import { ArticlePost } from '../../../shared/models/article-post';

@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.scss']
})
export class ViewArticleComponent implements OnInit {
  article!: ArticlePost;
  constructor(private route: Router, private dataService: DataArticleService) { }

  ngOnInit(): void {
    this.article = this.dataService.getDataValue().find((item: ArticlePost) => this.route.url.includes(item.linkPost))
  }
}
