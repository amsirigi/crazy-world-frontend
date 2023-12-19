import { TestBed } from '@angular/core/testing';

import { UpdateCitypopulationService } from './update-citypopulation.service';

describe('UpdateCitypopulationService', () => {
  let service: UpdateCitypopulationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateCitypopulationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
