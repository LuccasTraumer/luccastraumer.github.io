import { TestBed } from '@angular/core/testing';

import { DarkThemeOnService } from './dark-theme-on.service';

describe('DarkThemeOnService', () => {
  let service: DarkThemeOnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DarkThemeOnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
