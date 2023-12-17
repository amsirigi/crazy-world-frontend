import { Component } from '@angular/core';
import { CityService } from '../../services/city.service';
import { City } from '../../model/city';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrl: './city-list.component.css'
})
export class CityListComponent {

 
  countryName: string = '';
  cities: City[] = [];
  isSearchClicked: boolean = false;
  errorMessage: string = '';

  constructor(private cityService: CityService) {}

  ngOnInit() {}

  getCityDetails() {
    if (this.countryName.trim() === '') {
      this.errorMessage = 'Please enter a country name.';
      return;
    }

    this.isSearchClicked = true;

    this.cityService.getCityList(this.countryName).subscribe(
      (data: City[]) => {
        this.cities = data;
        this.isSearchClicked = false;
        this.errorMessage = 'No details found';  // Clear error message on successful response
      },
      (error) => {
        console.error('Error fetching city list:', error);
        this.isSearchClicked = false;
        this.errorMessage = 'No details found. Please try again.';  // Provide a user-friendly error message
      }
    );
  }


}
