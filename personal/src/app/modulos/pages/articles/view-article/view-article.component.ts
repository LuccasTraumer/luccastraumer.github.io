import {Component, inject, WritableSignal} from '@angular/core';
import { Router} from '@angular/router';
import { ArticlePost } from '../../../shared-ui/models/article-post';
import {ArticleService} from "../service/article.service";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {SkeltonComponent} from "../../../shared-ui/skelton/skelton.component";
import {toSignal} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-home-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    SkeltonComponent
  ],
  providers: [
    ArticleService
  ]
})
export default class ViewArticleComponent {
  private route: Router = inject(Router)
  private articleService = inject(ArticleService);
  protected article!: WritableSignal<ArticlePost>;

  constructor() {
    // @ts-ignore
    this.article = toSignal(this.articleService.getArticleByName(parseInt(this.route.url.split('/')[2])));
  }
}
