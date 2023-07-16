import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataArticleService } from '../service/data-article.service';
import { ArticlePost } from '../../../shared/models/article-post';

@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.scss']
})
export class ViewArticleComponent implements OnInit {
  article!: ArticlePost;
  constructor(private route: ActivatedRoute, private dataService: DataArticleService) { }

  ngOnInit(): void {

    console.warn(this.dataService.getDataValue());
    this.route.data.subscribe((item: any) => {
      item.article
      console.warn(JSON.stringify(item.article));
      this.article = item.article;
    })
  }

}
