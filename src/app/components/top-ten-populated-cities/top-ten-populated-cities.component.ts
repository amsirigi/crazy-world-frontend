import { Component } from '@angular/core';
import { City } from '../../model/city';
import { CityService } from '../../services/city.service';

@Component({
  selector: 'app-top-ten-populated-cities',
  templateUrl: './top-ten-populated-cities.component.html',
  styleUrl: './top-ten-populated-cities.component.css'
})
export class TopTenPopulatedCitiesComponent {

  topTenPopulatedCities: City[]=[];

  constructor(private cityService: CityService) {}

  ngOnInit() {
    this.fetchTopTenPopulatedCities();
  }

  fetchTopTenPopulatedCities() {
    this.cityService.getTopTenPopulatedCities().subscribe(
      data => {
        this.topTenPopulatedCities = data;
        console.log('Top Ten Populated Cities:', this.topTenPopulatedCities);
      },
      error => {
        console.error('Error fetching top ten populated cities:', error);
      }
    );
  }
}
