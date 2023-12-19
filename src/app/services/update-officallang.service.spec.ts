import { TestBed } from '@angular/core/testing';

import { UpdateOfficallangService } from './update-officallang.service';

describe('UpdateOfficallangService', () => {
  let service: UpdateOfficallangService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateOfficallangService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
