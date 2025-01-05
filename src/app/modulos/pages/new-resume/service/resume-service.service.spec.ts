import { TestBed } from '@angular/core/testing';

import { ResumeServiceService } from './resume-service.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {HttpClient} from "@angular/common/http";

describe('ResumeServiceService', () => {
  let service: ResumeServiceService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ]
    });

    http = TestBed.inject(HttpClient);
    service = TestBed.inject(ResumeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('when method getDataResume was called then works', () => {
    jest.spyOn(http, 'get');

    service.getDataResume();

    expect(http.get).toBeCalledTimes(1);
  });
});
