import { Component } from '@angular/core';
import { City } from '../../model/city';
import { CityService } from '../../services/city.service';

@Component({
  selector: 'app-all-cities',
  templateUrl: './all-cities.component.html',
  styleUrl: './all-cities.component.css'
})
export class AllCitiesComponent {

  cities: City[] = [];

  constructor(private cityService: CityService) {}

  ngOnInit() {
    this.fetchAllCities();
  }

  fetchAllCities() {
    this.cityService.getAllCities().subscribe(data => {
      this.cities = data;
      console.log('All Cities:', this.cities);
    });
  }

}

