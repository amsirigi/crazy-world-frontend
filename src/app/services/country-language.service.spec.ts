import { TestBed } from '@angular/core/testing';

import { CountryLanguageService } from './country-language.service';

describe('CountryLanguageService', () => {
  let service: CountryLanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryLanguageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
