import { TestBed } from '@angular/core/testing';

import { UpdateHeadOfStateService } from './update-head-of-state.service';

describe('UpdateHeadOfStateService', () => {
  let service: UpdateHeadOfStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateHeadOfStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
