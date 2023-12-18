import { Component } from '@angular/core';
import { CityService } from '../../services/city.service';

@Component({
  selector: 'app-country-city-count',
  templateUrl: './country-city-count.component.html',
  styleUrls: ['./country-city-count.component.css']
})
export class CountryCityCountComponent {
  cityCount: number = 0;
  countryName: string = '';
 
  constructor(private cityService: CityService) {}
 
  fetchCityCount() {
    if (this.countryName.trim() !== '') {
      this.cityService.getCityCountByCountryName(this.countryName).subscribe(
        (response: string) => {
          // Assuming the response is a string like "Total count of cities in United States: 3"
          const match = response.match(/\d+/);
          this.cityCount = match ? +match[0] : 0;
          console.log('City Count:', this.cityCount);
        },
        error => {
          console.error('Error fetching city count:', error);
        }
      );
    }
  }
}
