import { Component } from '@angular/core';
import { UpdatePopulationService } from '../../services/update-population.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-update-population',
  templateUrl: './update-population.component.html',
  styleUrl: './update-population.component.css'
})
export class UpdatePopulationComponent {
  countryName: string = '';
  newPopulation: number = 0;
  errorMessage: string = '';

  constructor(private countryService: UpdatePopulationService) { }

  updatePopulation(): void {
    if (this.countryName && this.newPopulation) {
      const updates = { "population": this.newPopulation };
      this.countryService.updatePopulation(this.countryName, updates)
        .subscribe(
          (data) => {
            console.log('Updated Population:', data);
            // Handle success here (e.g., show a success message to the user)
            this.countryName='';
            this.newPopulation=0;
          },
          (error: HttpErrorResponse) => {
            console.error('Error updating Population:', error);
            if (error.status === 400) {
              this.errorMessage = 'Validation error: ' + error.error;
            } else if (error.status === 404) {
              this.errorMessage = 'Country not found: ' + error.error;
            } else {
              this.errorMessage = 'An error occurred while processing the request';
            }
            // Handle error messages by displaying them to the user
          }
        );
    } else {
      this.errorMessage = 'Please fill in both country name and new Population.';
    }
  }

}
