import { Component } from '@angular/core';
import { CityService } from '../../services/city.service';

@Component({
  selector: 'app-population-info',
  templateUrl: './population-info.component.html',
  styleUrl: './population-info.component.css'
})
export class PopulationInfoComponent {


  countrycode: any = '';
  populationAndLifeExceptency :string='';
  population: number | null = null;
  lifeExpectancy: number | null = null;
  
  constructor(private cityService: CityService) {}

  isSearchClicked: boolean = false;


  getPopulationInfo() {
    if (this.countrycode.trim() === '') {
      // Handle validation or show an error message
      return;
    }
  
    this.isSearchClicked = true;
    this.cityService.getPopulationAndLifeExpectancy(this.countrycode).subscribe(
      (data: any) => {
        // Check if the response has the expected properties
        if (data!==null) {
          this.populationAndLifeExceptency = data;
        } else {
          console.error('Invalid API response:', data);
          // Handle the case when the API response doesn't match the expected structure
        }
        this.isSearchClicked = false;
      },
      (error:any) => {
        console.error('Error fetching population info:', error);
        this.isSearchClicked = false;
      }
    );
  }
  
}
