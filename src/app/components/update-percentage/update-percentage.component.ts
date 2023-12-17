import { Component } from '@angular/core';
import { CountryLanguageService } from '../../services/country-language.service';
import { CountryLanguage } from '../../model/country-language';

@Component({
  selector: 'app-update-percentage',
  templateUrl: './update-percentage.component.html',
  styleUrl: './update-percentage.component.css'
})

export class CountryLanguageComponent {
  worldFactsParagraph: string =
    'Did you know that Earth is home to over 7.9 billion people and 195 countries? ' +
    'Explore the rich diversity of cultures, languages, and landscapes across the continents. ' +
    'From the highest peaks to the deepest oceans, our planet is a treasure trove of wonders waiting to be discovered.';

  updateCountryCode: string = '';
  updateLanguage: string = '';
  updatePercentageValue: number | null = null;

  officialCountryCode: string = '';
  officialLanguage: string = '';

  constructor(private countryLanguageService: CountryLanguageService) {}

  updatePercentage() {
    if (this.updateCountryCode && this.updateLanguage && this.updatePercentageValue !== null) {
      this.countryLanguageService
        .updatePercentage(this.updateCountryCode, this.updateLanguage, this.updatePercentageValue)
        .subscribe(
          () => {
            console.log('Percentage updated successfully');
            // Optionally, you can update your UI or perform additional actions after a successful update.
          },
          (error) => {
            console.error(error);
            // Optionally, you can handle the error or display a message to the user.
          }
        );
    }
  }
}
