import { TestBed } from '@angular/core/testing';

import { UpdateGnpService } from './update-gnp.service';

describe('UpdateGnpService', () => {
  let service: UpdateGnpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateGnpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
