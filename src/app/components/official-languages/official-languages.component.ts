import { Component } from '@angular/core';
import { CountryLanguageService } from '../../services/country-language.service';
import { CountryLanguage } from '../../model/country-language';
@Component({
  selector: 'app-official-languages',
  templateUrl: './official-languages.component.html',
  styleUrl: './official-languages.component.css'
})
export class OfficialLanguagesComponent {
  officialLanguages: CountryLanguage[] = [];
  errorMessage: string = '';
  constructor(private countryLanguageService: CountryLanguageService) {}
  getAllOfficialLanguages() {
    this.countryLanguageService.getAllOfficialCountryLanguages().subscribe(
      (data: CountryLanguage[]) => {
        this.officialLanguages = data;
      },
      (error) => {
        console.error(error);
this.errorMessage = error.error.message
      }
    );
  }
}
