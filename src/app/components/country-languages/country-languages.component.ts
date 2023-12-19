import { Component } from '@angular/core';
import { CountryLanguageService } from '../../services/country-language.service';
import { CountryLanguage } from '../../model/country-language';
@Component({
  selector: 'app-country-languages',
  templateUrl: './country-languages.component.html',
  styleUrl: './country-languages.component.css'
})
export class CountryLanguagesComponent {
  countryLanguages: CountryLanguage[] = [];
  countryCode: string = '';
  errorMessage: string = '';
  

  constructor(private countryLanguageService: CountryLanguageService) {}
  getCountryLanguagesByCode() {
    if (this.countryCode) {
      this.countryLanguageService.getCountryLanguagesByCode(this.countryCode).subscribe(
        (data: CountryLanguage[]) => {
          this.countryLanguages = data;
        },
        (error) => {
          console.error(error);
this.errorMessage = error.error.message
        }
      );
    }
  }


}
