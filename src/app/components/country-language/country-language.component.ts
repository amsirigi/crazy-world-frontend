import { Component } from '@angular/core';
import { CountryLanguageService } from '../../services/country-language.service';
import { CountryLanguage } from '../../model/country-language';

@Component({
  selector: 'app-country-language',
  templateUrl: './country-language.component.html',
  styleUrls: ['./country-language.component.css'],
})
export class CountryLanguageComponent {
  countrylanguagefact:string = "The world is a linguistic kaleidoscope, hosting over 7,100 languages across different countries. Each nation contributes to this diversity with its set of official languages and dialects, painting a rich tapestry of communication.";

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

