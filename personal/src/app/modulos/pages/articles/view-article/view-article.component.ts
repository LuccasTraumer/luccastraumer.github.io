import { Component, inject, OnDestroy, OnInit} from '@angular/core';
import { Router} from '@angular/router';
import { ArticlePost } from '../../../shared-ui/models/article-post';
import {ArticleService} from "../service/article.service";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {SkeltonComponent} from "../../../shared-ui/skelton/skelton.component";
import {Subject, takeUntil} from "rxjs";

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
export default class ViewArticleComponent implements OnInit, OnDestroy {
  private route: Router = inject(Router)
  private articleService = inject(ArticleService);
  private ngDestroy$ = new Subject();
  article!: ArticlePost;

  ngOnInit(): void {
    if (!this.article) {
      this.articleService.getArticleByName(parseInt(this.route.url.split('/')[2]))
        .pipe(takeUntil(this.ngDestroy$))
        .subscribe({
        next: value => {
          this.article = value;
        }
      })
    }
  }

  ngOnDestroy(): void {
    this.ngDestroy$.next(true);
    this.ngDestroy$.complete();
  }
}
