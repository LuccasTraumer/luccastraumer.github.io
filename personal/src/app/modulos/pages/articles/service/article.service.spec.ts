import { TestBed } from '@angular/core/testing';

import { ArticleService } from './article.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {HttpClient} from "@angular/common/http";

describe('ArticleService', () => {
  let service: ArticleService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });

    http = TestBed.inject(HttpClient);
    service = TestBed.inject(ArticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('when method getArticles was called then works with success', () => {
    jest.spyOn(http, 'get');

    service.getArticles();

    expect(http.get).toBeCalledTimes(1);
  });
});
