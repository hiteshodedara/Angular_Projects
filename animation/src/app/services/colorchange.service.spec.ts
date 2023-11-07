import { TestBed } from '@angular/core/testing';

import { ColorchangeService } from './colorchange.service';

describe('ColorchangeService', () => {
  let service: ColorchangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorchangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
