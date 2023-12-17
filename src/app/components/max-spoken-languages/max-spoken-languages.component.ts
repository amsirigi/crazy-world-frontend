import { Component } from '@angular/core';
import { CountryLanguageService } from '../../services/country-language.service';
import { CountryLanguage } from '../../model/country-language';
@Component({
  selector: 'app-max-spoken-languages',
  templateUrl: './max-spoken-languages.component.html',
  styleUrl: './max-spoken-languages.component.css'
})
export class MaxSpokenLanguagesComponent {
  maxSpokenLanguages: CountryLanguage[] = [];
  errorMessage: string = '';
  constructor(private countryLanguageService: CountryLanguageService) {}
  getMaxSpokenLanguages() {
    this.countryLanguageService.getMaxSpokenLanguages().subscribe(
      (data: CountryLanguage[]) => {
        this.maxSpokenLanguages = data;
      },
      (error) => {
        console.error(error);
this.errorMessage = error.error.message
      }
    );
  }
}
