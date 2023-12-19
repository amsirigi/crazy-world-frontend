import { Component } from '@angular/core';
import { Country } from '../../model/country';
import { CountryService } from '../../services/country-service.service';

@Component({
  selector: 'app-highest-life-expectancy',
  templateUrl: './highest-life-expectancy.component.html',
  styleUrl: './highest-life-expectancy.component.css'
})
export class HighestLifeExpectancyComponent {
  country: Country | null = null;

  constructor(private countryService: CountryService) {}

  ngOnInit() {
    this.countryService.getHighestLifeExpectancy().subscribe(
      (data) => {
        this.country = data;
      },
      (error) => {
        console.error('Error fetching country with highest life expectancy:', error);
      }
    );
  }
}
