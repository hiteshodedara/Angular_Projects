import { TestBed } from '@angular/core/testing';

import { RestoserviceService } from './restoservice.service';

describe('RestoserviceService', () => {
  let service: RestoserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestoserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
