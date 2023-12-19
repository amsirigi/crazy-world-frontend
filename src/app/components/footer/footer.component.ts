
import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/formservice.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent implements OnInit {
  formData: any = {};
  isFormSubmitting: boolean = false;
  successMessage: string = ''; 

  constructor(private formService: FormService) {}

  ngOnInit(): void {
    // Subscribe to the form submission observable
    this.formService.getFormSubmitObservable().subscribe(() => {
      this.successMessage = 'Form submitted successfully!';

      this.formData = {};
      this.isFormSubmitting = false;
    });
  }

  onSubmit(): void {
    this.isFormSubmitting = true;
    this.formService.submitForm(this.formData);
  }
}
