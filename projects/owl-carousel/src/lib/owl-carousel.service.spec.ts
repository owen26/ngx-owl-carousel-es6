import { TestBed } from '@angular/core/testing';

import { OwlCarouselService } from './owl-carousel.service';

describe('OwlCarouselService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OwlCarouselService = TestBed.get(OwlCarouselService);
    expect(service).toBeTruthy();
  });
});
