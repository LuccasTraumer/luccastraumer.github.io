import { TestBed } from '@angular/core/testing';

import { CdnImageService } from './cdn-image.service';

describe('CdnImageService', () => {
  let service: CdnImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CdnImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
