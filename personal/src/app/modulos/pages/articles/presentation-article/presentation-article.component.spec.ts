import { ComponentFixture, TestBed } from '@angular/core/testing';

import  PresentationArticleComponent  from './presentation-article.component';
import {RouterTestingModule} from "@angular/router/testing";
import {ActivatedRoute, Router} from "@angular/router";
import {ArticleService} from "../service/article.service";
import {ArticlePost, SectionPost} from "../../../shared/models/article-post";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('PresentationArticleComponent', () => {
  let component: PresentationArticleComponent;
  let fixture: ComponentFixture<PresentationArticleComponent>;
  let router: Router;
  let articleService: ArticleService;
  let activetedRouter: ActivatedRoute;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        PresentationArticleComponent
      ]
    });


    router = TestBed.inject(Router);
    activetedRouter = TestBed.inject(ActivatedRoute);
    articleService = TestBed.inject(ArticleService);

    fixture = TestBed.createComponent(PresentationArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('when method redirectToArticle was called then works', () => {
    jest.spyOn(router, 'navigate');

    component.redirectToArticle(0);

    expect(router.navigate).toBeCalledTimes(1);
  });
});
