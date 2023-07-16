import { TestBed } from '@angular/core/testing';

import { DataArticleService } from './data-article.service';

describe('DataArticleService', () => {
  let service: DataArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataArticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
