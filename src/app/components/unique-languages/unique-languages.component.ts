import { Component } from '@angular/core';
import { CountryLanguageService } from '../../services/country-language.service';
import { CountryLanguage } from '../../model/country-language';

@Component({
  selector: 'app-unique-languages',
  templateUrl: './unique-languages.component.html',
  styleUrl: './unique-languages.component.css'
})
export class UniqueLanguagesComponent {
  uniqueLanguages: CountryLanguage[] = [];
  errorMessage: string = '';
  

  constructor(private countryLanguageService: CountryLanguageService) {}

  getAllUniqueLanguages() {
    this.countryLanguageService.getAllUniqueLanguages().subscribe(
      (data: CountryLanguage[]) => {
        this.uniqueLanguages = data;
        console.log(this.uniqueLanguages);
      },
      (error) => {
        console.error(error);
this.errorMessage = error.error.message
      }
    );
  }


}
