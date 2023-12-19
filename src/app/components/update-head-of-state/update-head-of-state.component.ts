import { Component } from '@angular/core';
import { UpdateHeadOfStateService } from '../../services/update-head-of-state.service';

@Component({
  selector: 'app-update-head-of-state',
  templateUrl: './update-head-of-state.component.html',
  styleUrl: './update-head-of-state.component.css'
})
export class UpdateHeadOfStateComponent {
  countryName: string = '';
  newHeadOfState: string = '';

  constructor(private countryService: UpdateHeadOfStateService) { }

  updateHeadOfState(): void {
    if (this.countryName && this.newHeadOfState) {
      const updates = { "headOfState": this.newHeadOfState };
      this.countryService.updateHeadOfState(this.countryName, updates)
        .subscribe(
          (data: any) => {
            console.log('Updated Country:', data);
            // You can handle success here (e.g., show a success message)
            this.countryName = '';
           this.newHeadOfState = '';
          
          },
          (error: any) => {
            console.error('Error updating head of state:', error);
            // Handle error (e.g., show an error message)
          }
        );
    } else {
      // Handle validation (e.g., show a validation message)
    }
  }

}
