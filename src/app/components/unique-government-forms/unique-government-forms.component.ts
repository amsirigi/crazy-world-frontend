import { Component } from '@angular/core';
import { Country } from '../../model/country';
import { CountryService } from '../../services/country-service.service';

@Component({
  selector: 'app-unique-government-forms',
  templateUrl: './unique-government-forms.component.html',
  styleUrl: './unique-government-forms.component.css'
})
export class UniqueGovernmentFormsComponent {
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  ngOnInit() {
    this.countryService.getUniqueGovernmentForms().subscribe(
      (data) => {
        this.countries = data;
      },
      (error) => {
        console.error('Error fetching countries with unique government forms:', error);
      }
    );
  }

}
