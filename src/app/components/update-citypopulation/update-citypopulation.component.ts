import { Component } from '@angular/core';
import { UpdateCitypopulationService } from '../../services/update-citypopulation.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-update-citypopulation',
  templateUrl: './update-citypopulation.component.html',
  styleUrl: './update-citypopulation.component.css'
})
export class UpdateCitypopulationComponent {

  cityName: string = '';
  newPopulation: number = 0;
  errorMessage: string = '';

  constructor(private cityPopulationService: UpdateCitypopulationService) { }

  updateCityPopulation(): void {
    if (this.cityName && this.newPopulation) {
      this.cityPopulationService.updateCityPopulation(this.cityName, this.newPopulation)
        .subscribe(
          (data) => {
            console.log('Updated City Population:', data);
            // Handle success here (e.g., show a success message to the user)
            this.cityName = '';
            this.newPopulation = 0;
          },
          (error: HttpErrorResponse) => {
            console.error('Error updating City Population:', error);
            if (error.status === 404) {
              this.errorMessage = 'City not found';
            } else {
              this.errorMessage = 'An error occurred while processing the request';
            }
            // Handle error messages by displaying them to the user
          }
        );
    } else {
      this.errorMessage = 'Please fill in city name and new population.';
    }
  }

}
