import { TestBed } from '@angular/core/testing';

import { UpdatePopulationService } from './update-population.service';

describe('UpdatePopulationService', () => {
  let service: UpdatePopulationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatePopulationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
