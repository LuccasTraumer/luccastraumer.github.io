import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationArticleComponent } from './presentation-article.component';
import {RouterTestingModule} from "@angular/router/testing";
import {ActivatedRoute, Router} from "@angular/router";
import {ArticleService} from "../service/article.service";
import {DataArticleService} from "../service/data-article.service";
import {ArticlePost, SectionPost} from "../../../shared/models/article-post";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('PresentationArticleComponent', () => {
  let component: PresentationArticleComponent;
  let fixture: ComponentFixture<PresentationArticleComponent>;
  let router: Router;
  let articleService: ArticleService;
  let dataService: DataArticleService
  let activetedRouter: ActivatedRoute;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PresentationArticleComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ]
    });


    router = TestBed.inject(Router);
    activetedRouter = TestBed.inject(ActivatedRoute);
    articleService = TestBed.inject(ArticleService);
    dataService = TestBed.inject(DataArticleService);

    fixture = TestBed.createComponent(PresentationArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('when method getDescription was called with description length less then 147 works', () => {
    const sectionPost: SectionPost = {
      content: ''
    };

    const article: ArticlePost = {
      id: 0,
      linkPost: '',
      description: [sectionPost],
      date: new Date(),
      title: 'test'
    };
    expect(component.getDescription(article)).toStrictEqual('');
  });

  it('when method getDescription was called with description length more then 147 works', () => {
    const sectionPost: SectionPost = {
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab accusamus at aut autem beatae blanditiis consequuntur cum deleniti dolorem eius eos eveniet expedita explicabo hic illo impedit ipsam minima minus molestiae necessitatibus odio optio pariatur perspiciatis placeat porro quasi quidem, quo quod repellat repellendus sequi sint sunt temporibus vel vero voluptates. Ab adipisci consequuntur deserunt dolores fugiat, iure, libero, molestiae molestias nemo officia quasi quisquam saepe unde! Autem consequatur deserunt dolores eaque, eum excepturi molestiae molestias repellat tempora voluptas. Cupiditate ea harum illum impedit iure laborum mollitia nemo nihil perspiciatis, praesentium qui quia quis reprehenderit saepe sequi unde voluptate! A adipisci aperiam asperiores atque beatae cum, deleniti dolorem, doloribus error ex explicabo facilis hic inventore ipsa itaque laboriosam magnam nulla quae quam rem sed, totam ut voluptatum! Ab aliquid aperiam assumenda debitis deleniti explicabo facere id, impedit ipsam iste nostrum numquam odio officia omnis placeat velit. '
    };

    const article: ArticlePost = {
      id: 0,
      linkPost: '',
      description: [sectionPost],
      date: new Date(),
      title: 'test'
    };
    expect(component.getDescription(article)).toStrictEqual(`Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab accusamus at aut autem beatae blanditiis consequuntur cum deleniti dolorem eius eos ...`);
  });

  it('when method redirectToArticle was called then works', () => {
    jest.spyOn(router, 'navigate');

    component.redirectToArticle('');

    expect(router.navigate).toBeCalledTimes(1);
  });
});
