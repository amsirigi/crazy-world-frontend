import { Component } from '@angular/core';
import { City } from '../../model/city';
import { CityService } from '../../services/city.service';

@Component({
  selector: 'app-district-avg-population',
  templateUrl: './district-avg-population.component.html',
  styleUrl: './district-avg-population.component.css'
})
export class DistrictAvgPopulationComponent {

  cities: City[] = [];
  districtName: string = '';
 
  constructor(private cityService: CityService) {}
 
  ngOnInit() {
   // this.fetchDistricts();
  }
 
  fetchDistricts() {
    if (this.districtName.trim() !== '') {
      this.cityService.getAvgPopulationByDistrict(this.districtName).subscribe(
        (data: City[]) => {
          this.cities = data;
          console.log('Districts:', this.cities);
        },
        error => {
          console.error('Error fetching districts:', error);
        }
      );
    }
}
}
