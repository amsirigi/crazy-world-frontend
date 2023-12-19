import { TestBed } from '@angular/core/testing';

import { UpdateDistrictService } from './update-district.service';

describe('UpdateDistrictService', () => {
  let service: UpdateDistrictService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateDistrictService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
