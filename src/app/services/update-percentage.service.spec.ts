import { TestBed } from '@angular/core/testing';

import { UpdatePercentageService } from './update-percentage.service';

describe('UpdatePercentageService', () => {
  let service: UpdatePercentageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatePercentageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
