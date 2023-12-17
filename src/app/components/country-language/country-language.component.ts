import { Component } from '@angular/core';
import { CountryLanguageService } from '../../services/country-language.service';
import { CountryLanguage } from '../../model/country-language';

@Component({
  selector: 'app-country-language',
  templateUrl: './country-language.component.html',
  styleUrls: ['./country-language.component.css'],
})
export class CountryLanguageComponent {
  worldFactsParagraph:string = "Did you know that Earth is home to over 7.9 billion people and 195 countries? " +
"Explore the rich diversity of cultures, languages, and landscapes across the continents. " +
"From the highest peaks to the deepest oceans, our planet is a treasure trove of wonders waiting to be discovered.";

}
//  uniqueLanguages: CountryLanguage[] = [];
//  countryLanguages: CountryLanguage[] = [];
//  officialLanguages: CountryLanguage[] = [];
//  unofficialLanguages: CountryLanguage[] = [];
//  countryCode: string = '';
//  maxSpokenLanguages: CountryLanguage[] = [];
//  maxSpokenCountryCode: string = '';
//  maxSpokenLanguage: CountryLanguage | null = null;
//   errorMessage: string = '';
  

// constructor(private countryLanguageService: CountryLanguageService) {}

//   getAllUniqueLanguages() {
//     this.countryLanguageService.getAllUniqueLanguages().subscribe(
//       (data: CountryLanguage[]) => {
//         this.uniqueLanguages = data;
//         console.log(this.uniqueLanguages);
//       },
//       (error) => {
//         console.error(error);
// this.errorMessage = error.error.message
//       }
//     );
//   }

//   getCountryLanguagesByCode() {
//     if (this.countryCode) {
//       this.countryLanguageService.getCountryLanguagesByCode(this.countryCode).subscribe(
//         (data: CountryLanguage[]) => {
//           this.countryLanguages = data;
//         },
//         (error) => {
//           console.error(error);
// this.errorMessage = error.error.message
//         }
//       );
//     }
//   }

//   getAllOfficialLanguages() {
//     this.countryLanguageService.getAllOfficialCountryLanguages().subscribe(
//       (data: CountryLanguage[]) => {
//         this.officialLanguages = data;
//       },
//       (error) => {
//         console.error(error);
// this.errorMessage = error.error.message
//       }
//     );
//   }

//   getUnofficialLanguagesByCode() {
//     if (this.countryCode) {
//       this.countryLanguageService.getUnofficialCountryLanguagesByCode(this.countryCode).subscribe(
//         (data: CountryLanguage[]) => {
//           this.unofficialLanguages = data;
//         },
//         (error) => {
//           console.error(error);
// this.errorMessage = error.error.message
//         }
//       );
//     }
//   }
//   getMaxSpokenLanguages() {
//     this.countryLanguageService.getMaxSpokenLanguages().subscribe(
//       (data: CountryLanguage[]) => {
//         this.maxSpokenLanguages = data;
//       },
//       (error) => {
//         console.error(error);
// this.errorMessage = error.error.message
//       }
//     );
//   }

//   getMaxSpokenLanguageByCode() {
//     if (this.maxSpokenCountryCode) {
//       this.countryLanguageService.getMaxSpokenLanguageByCode(this.maxSpokenCountryCode).subscribe(
//         (data: CountryLanguage) => {
//           this.maxSpokenLanguage = data;
//         },
//         (error) => {
//           console.error(error);
// this.errorMessage = error.error.message
//         }
//       );
//     }
//   }
// }

