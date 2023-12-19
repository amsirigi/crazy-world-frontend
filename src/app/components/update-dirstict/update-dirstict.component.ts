import { Component } from '@angular/core';
import { UpdateDistrictService } from '../../services/update-district.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-update-dirstict',
  templateUrl: './update-dirstict.component.html',
  styleUrl: './update-dirstict.component.css'
})
export class UpdateDirstictComponent {
  cityName: string = '';
  newDistrict: string = '';
  errorMessage: string = '';

  constructor(private cityService: UpdateDistrictService) { }

  updateDistrictForCity(): void {
    if (this.cityName && this.newDistrict) {
      this.cityService.updateDistrictForCity(this.cityName, this.newDistrict)
        .subscribe(
          (data) => {
            console.log('Updated District for City:', data);
            // Handle success here (e.g., show a success message to the user)
            this.cityName='';
            this.newDistrict='';
          },
          (error: HttpErrorResponse) => {
            console.error('Error updating District for City:', error);
            if (error.status === 404) {
              this.errorMessage = 'City not found';
            } else {
              this.errorMessage = 'An error occurred while processing the request';
            }
            // Handle error messages by displaying them to the user
          }
        );
    } else {
      this.errorMessage = 'Please fill in city name and new district.';
    }
  }
}
