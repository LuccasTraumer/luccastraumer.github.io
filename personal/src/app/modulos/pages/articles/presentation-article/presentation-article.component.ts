import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ArticlePost } from '../../../shared-ui/models/article-post';
import { ArticleService } from '../service/article.service';
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {SkeltonComponent} from "../../../shared-ui/skelton/skelton.component";
import {DescriptionArticlePipe} from "../service/description-article.pipe";
import {Subject, takeUntil} from "rxjs";
import {LoaderService} from "../../../shared-ui/loader/service/loader.service";

@Component({
  selector: 'app-presentation-article',
  templateUrl: './presentation-article.component.html',
  styleUrls: ['./presentation-article.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    SkeltonComponent,
    DescriptionArticlePipe
  ],
  providers: [
    ArticleService,
    DescriptionArticlePipe
  ]
})
export default class PresentationArticleComponent implements OnInit, OnDestroy {
  private router: Router = inject(Router);
  private articleService: ArticleService = inject(ArticleService);
  private ngDestroy$ = new Subject();
  private loader: LoaderService = inject(LoaderService);
  listArticle!: ArticlePost[];

  ngOnInit(): void {
    this.articleService.getArticles().pipe(takeUntil(this.ngDestroy$)).subscribe({
      next: value => {
        this.listArticle = value as ArticlePost[];
      },
      error: err => console.error(err)
    });
  }

  redirectToArticle(id: number) {
    this.router.navigateByUrl(`articles/${id}`)
      .then(() => this.loader.setStateLoader(true)).finally(() => this.loader.setStateLoader(false));
  }

  ngOnDestroy(): void {
    this.ngDestroy$.next(true);
    this.ngDestroy$.complete()
  }
}
