import { TestBed } from '@angular/core/testing';

import { NewsReadingService } from './news-reading.service';

describe('NewsReadingService', () => {
  let service: NewsReadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsReadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
