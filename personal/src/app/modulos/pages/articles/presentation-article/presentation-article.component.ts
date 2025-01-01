import {Component, inject, WritableSignal} from '@angular/core';
import { Router } from '@angular/router';
import { ArticlePost } from '../../../shared-ui/models/article-post';
import { ArticleService } from '../service/article.service';
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {SkeltonComponent} from "../../../shared-ui/skelton/skelton.component";
import {DescriptionArticlePipe} from "../service/description-article.pipe";
import {LoaderService} from "../../../shared-ui/loader/service/loader.service";
import {toSignal} from "@angular/core/rxjs-interop";

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
export default class PresentationArticleComponent {
  private router: Router = inject(Router);
  private articleService: ArticleService = inject(ArticleService);
  private loader: LoaderService = inject(LoaderService);
  protected listArticle!: WritableSignal<ArticlePost[]>;

  constructor() {
    // @ts-ignore
    this.listArticle = toSignal(this.articleService.getArticles())
  }

  redirectToArticle(id: number) {
    this.router.navigateByUrl(`articles/${id}`)
      .then(() => this.loader.setStateLoader(true)).finally(() => this.loader.setStateLoader(false));
  }
}
