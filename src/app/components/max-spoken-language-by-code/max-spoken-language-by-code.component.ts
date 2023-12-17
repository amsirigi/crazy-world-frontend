import { Component } from '@angular/core';
import { CountryLanguageService } from '../../services/country-language.service';
import { CountryLanguage } from '../../model/country-language';

@Component({
  selector: 'app-max-spoken-language-by-code',
  templateUrl: './max-spoken-language-by-code.component.html',
  styleUrl: './max-spoken-language-by-code.component.css'
})
export class MaxSpokenLanguageByCodeComponent {
  uniqueLanguages: CountryLanguage[] = [];
 countryLanguages: CountryLanguage[] = [];
 officialLanguages: CountryLanguage[] = [];
 unofficialLanguages: CountryLanguage[] = [];
 countryCode: string = '';
 maxSpokenLanguages: CountryLanguage[] = [];
 maxSpokenCountryCode: string = '';
 maxSpokenLanguage: CountryLanguage | null = null;
  errorMessage: string = '';
  
  constructor(private countryLanguageService: CountryLanguageService) {}
  getMaxSpokenLanguageByCode() {
    if (this.maxSpokenCountryCode) {
      this.countryLanguageService.getMaxSpokenLanguageByCode(this.maxSpokenCountryCode).subscribe(
        (data: CountryLanguage) => {
          this.maxSpokenLanguage = data;
        },
        (error) => {
          console.error(error);
this.errorMessage = error.error.message
        }
      );
    }
  }
}


