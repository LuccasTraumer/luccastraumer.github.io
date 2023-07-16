import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataArticleService } from '../service/data-article.service';
import { ArticlePost } from '../../../shared/models/article-post';
import { DataMock } from '../../../../utils/data-mock';

@Component({
  selector: 'app-presentation-article',
  templateUrl: './presentation-article.component.html',
  styleUrls: ['./presentation-article.component.scss']
})
export class PresentationArticleComponent {
  listArticle = DataMock.LIST_ARTICLE;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataArticleService
  ) {}

  getDescription(article: ArticlePost) {
    if(article.description[0].content.length > 147) {
      return `${article.description[0].content.substring(0, 147)}...`;
    }

    return article.description;
  }

  redirectToArticle(linkPost: string) {
    console.warn(`${this.router.url}/${linkPost}`);

    this.dataService.setValueData('teste');
    this.router.navigate([linkPost], { relativeTo: this.route });
  }
}
