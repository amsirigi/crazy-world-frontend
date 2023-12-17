import { Component } from '@angular/core';
import { CountryService } from '../../services/country-service.service';
import { Country } from '../../model/country';

@Component({
  selector: 'app-populatedcountries',
  templateUrl: './populatedcountries.component.html',
  styleUrl: './populatedcountries.component.css'
})
export class PopulatedcountriesComponent {
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  ngOnInit() {
    this.countryService.getTopTenPopulatedCountries().subscribe(
      (data) => {
        this.countries = data;
      },
      (error) => {
        console.error('Error fetching top ten populated countries:', error);
      }
    );
  }

}
