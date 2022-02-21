import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';

describe('SkillService', () => {
  let service: DataService;

  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [ HttpClientModule ],
      providers: [ HttpClient ]
    });

    http = TestBed.get(HttpClient);
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
