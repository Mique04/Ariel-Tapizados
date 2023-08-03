import { TestBed } from '@angular/core/testing';

import { FadeIn2SecService } from './fade-in-2-sec.service';

describe('FadeIn2SecService', () => {
  let service: FadeIn2SecService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FadeIn2SecService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
