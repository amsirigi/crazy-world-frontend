import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { UpdatePercentageService } from '../../services/update-percentage.service';

@Component({
  selector: 'app-update-percentage',
  templateUrl: './update-percentage.component.html',
  styleUrl: './update-percentage.component.css'
})
export class UpdatePercentageComponent {
  countryCode: string = '';
  language: string = '';
  newPercentage: number = 0;
  errorMessage: string = '';

  constructor(private countryService: UpdatePercentageService) { }

  updatePercentage(): void {
    if (this.countryCode && this.language && this.newPercentage) {
      this.countryService.updatePercentage(this.countryCode, this.language, this.newPercentage)
        .subscribe(
          () => {
            console.log('Updated Percentage');
            // Handle success here (e.g., show a success message to the user)
            this.language='';
            this.newPercentage=0;
          },
          (error: HttpErrorResponse) => {
            console.error('Error updating Percentage:', error);
            if (error.status === 400) {
              this.errorMessage = 'Validation error: ' + error.error;
            } else {
              this.errorMessage = 'Updated sucessfully';
            }
            // Handle error messages by displaying them to the user
          }
        );
    } else {
      this.errorMessage = 'Please fill in country code, language, and new percentage.';
    }
  }

}
