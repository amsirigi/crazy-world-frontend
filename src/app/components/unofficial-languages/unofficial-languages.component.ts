import { Component } from '@angular/core';
import { CountryLanguageService } from '../../services/country-language.service';
import { CountryLanguage } from '../../model/country-language';

@Component({
  selector: 'app-unofficial-languages',
  templateUrl: './unofficial-languages.component.html',
  styleUrl: './unofficial-languages.component.css'
})
export class UnofficialLanguagesComponent {
  unofficialLanguages: CountryLanguage[] = [];
  countryCode: string = '';

  errorMessage: string = '';
  

  constructor(private countryLanguageService: CountryLanguageService) {}
  getUnofficialLanguagesByCode() {
    if (this.countryCode) {
      this.countryLanguageService.getUnofficialCountryLanguagesByCode(this.countryCode).subscribe(
        (data: CountryLanguage[]) => {
          this.unofficialLanguages = data;
        },
        (error) => {
          console.error(error);
this.errorMessage = error.error.message
        }
      );
    }
  }

}
