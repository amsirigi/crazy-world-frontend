import { Component } from '@angular/core';
import { City } from '../../model/city';
import { CityService } from '../../services/city.service';

@Component({
  selector: 'app-max-populated-city',
  templateUrl: './max-populated-city.component.html',
  styleUrl: './max-populated-city.component.css'
})
export class MaxPopulatedCityComponent {

  city:City| null = null;
  
  constructor(private cityService: CityService) {}

  ngOnInit() {
    this.fetchMaxPopulatedCity();
  }

  fetchMaxPopulatedCity() {
    this.cityService.getMaxPopulatedCity().subscribe(
      data => {
        this.city = data;
        console.log('Max Populated City:', this.city);
      },
      error => {
        console.error('Error fetching max populated city:', error);
      }
    );
  }
}
