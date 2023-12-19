import { Component } from '@angular/core';
import { CityService } from '../../services/city.service';
import { City } from '../../model/city';

@Component({
  selector: 'app-first-ten-cities',
  templateUrl: './first-ten-cities.component.html',
  styleUrl: './first-ten-cities.component.css'
})
export class FirstTenCitiesComponent {
  cities: City[] = [];
  searchChar: string = ''; // You may bind this to an input field for user input
 
  constructor(private cityService: CityService) {}
 
  ngOnInit() {
    this.fetchFirstTenCities();
  }
 
  fetchFirstTenCities() {
    if (this.searchChar.trim() !== '') {
      this.cityService.getFirstTenCitiesStartingWithChar(this.searchChar).subscribe(
        (data: City[]) => {
          this.cities = data;
          console.log('First Ten Cities:', this.cities);
        },
        error => {
          console.error('Error fetching first ten cities:', error);
        }
      );
    }
}
}
