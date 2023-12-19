import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { UpdateGnpService } from '../../services/update-gnp.service';

@Component({
  selector: 'app-update-gnp',
  templateUrl: './update-gnp.component.html',
  styleUrl: './update-gnp.component.css'
})
export class UpdateGnpComponent {
  countryName: string = '';
  newGnp: number = 0;
  errorMessage: string = '';

  constructor(private countryService: UpdateGnpService) { }

  updateGnp(): void {
    if (this.countryName && this.newGnp) {
      const updates = { "gnp": this.newGnp };
      this.countryService.updateGnp(this.countryName, updates)
        .subscribe(
          (data: any) => {
            console.log('Updated GNP:', data);
            this.countryName='';
            this.newGnp=0;
            // Handle success here (e.g., show a success message to the user)
          },
          (error: HttpErrorResponse) => {
            console.error('Error updating GNP:', error);
            if (error.error instanceof ErrorEvent) {
              this.errorMessage = `An error occurred: ${error.error.message}`;
            } else {
              this.errorMessage = `Server returned code: ${error.status}, error message is: ${error.message}`;
            }
            // Handle error messages by displaying them to the user
          }
        );
    } else {
      this.errorMessage = 'Please fill in both country name and new GNP.';
    }
  }

}
