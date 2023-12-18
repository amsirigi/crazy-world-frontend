import { Component } from '@angular/core';
import { City } from '../../model/city';
import { CityService } from '../../services/city.service';

@Component({
  selector: 'app-district-by-code',
  templateUrl: './district-by-code.component.html',
  styleUrl: './district-by-code.component.css'
})
export class DistrictByCodeComponent {

  districts: City[] = [];
  countryCode: string = '';
 
  constructor(private cityService: CityService) {}
 
  ngOnInit() {
    this.fetchDistricts();
  }
 
 
 
  fetchDistricts() {
    if (this.countryCode.trim() !== '') {
      this.cityService.getDistrictsByCountryCode(this.countryCode).subscribe(
        (data: City[]) => {
          this.districts = data.filter(city => city.name !== null && city.district !== null);
          console.log('Districts:', this.districts);
        },
        error => {
          console.error('Error fetching districts:', error);
        }
      );
    }
  }
}
