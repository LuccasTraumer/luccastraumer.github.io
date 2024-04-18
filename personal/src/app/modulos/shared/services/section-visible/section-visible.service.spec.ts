import { TestBed } from '@angular/core/testing';

import { SectionVisibleService } from './section-visible.service';

describe('SectionVisibleService', () => {
  let service: SectionVisibleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SectionVisibleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
