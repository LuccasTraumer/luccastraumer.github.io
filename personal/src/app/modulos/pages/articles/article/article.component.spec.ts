import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleComponent } from './article.component';
import {ArticleService} from "../service/article.service";
import {DataArticleService} from "../service/data-article.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import { of } from 'rxjs';

describe('ArticleComponent', () => {
  let component: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;
  let articleService: ArticleService;
  let daraService: DataArticleService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleComponent ],
      imports: [
        HttpClientTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('when onInit was executed then make set of props', () => {
    jest.spyOn(articleService, 'getArticles');

    jest.spyOn(daraService, 'setValueData');

    component.ngOnInit();

    expect(articleService.getArticles).toBeCalledTimes(1);
    expect(daraService.setValueData).toBeCalledTimes(1);
  });
});
