import { Component } from '@angular/core';
import { Country } from '../../model/country';
import { CountryService } from '../../services/country-service.service';

@Component({
  selector: 'top-ten-gnp-countries',
  templateUrl: './top-ten-gnp-countries.component.html',
  styleUrl: './top-ten-gnp-countries.component.css'
})
export class TopTenGnpCountriesComponent {
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  ngOnInit() {
    this.countryService.getTopTenGnpCountries().subscribe(
      (data) => {
        this.countries = data;
      },
      (error) => {
        console.error('Error fetching top ten GNP countries:', error);
      }
    );
  }

}
