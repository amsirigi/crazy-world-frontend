import { Component } from '@angular/core';
import { CountryService } from '../../services/country-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from '../../model/country';

@Component({
  selector: 'app-world-facts',
  templateUrl: './world-facts.component.html',
  styleUrl: './world-facts.component.css'
})
export class WorldFactsComponent {

countries:Country[]=[];
country: Country | null = null;
showPopulatedCountriesDetails: boolean = false;
showLifeExpectancyDetails: boolean = false;
dataHistory: string[] = [];
worldFactsParagraph:string = "Did you know that Earth is home to over 7.9 billion people and 195 countries? " +
"Explore the rich diversity of cultures, languages, and landscapes across the continents. " +
"From the highest peaks to the deepest oceans, our planet is a treasure trove of wonders waiting to be discovered.";


  constructor(private countryService: CountryService,
    private route:ActivatedRoute,
    private router:Router){}



  ngOnInit(){
    this.route.paramMap.subscribe(()=>{
     
    });
  }

  getPopulatedCountries() {
    if (!this.showPopulatedCountriesDetails) {
      // Fetch data only if details are not already shown
      this.countryService.getTopTenPopulatedCountries().subscribe(
        (data) => {
          this.countries = data;
          this.showPopulatedCountriesDetails = true;
          this.dataHistory.push(JSON.stringify(data));
        },
        (error) => {
          console.error('Error fetching top ten populated countries:', error);
        }
      );
    } else {
      // Toggle the show/hide state without fetching data again
      this.showPopulatedCountriesDetails = !this.showPopulatedCountriesDetails;
    }
  }


  getHighestLifeExpectancy() {
    if (!this.showLifeExpectancyDetails) {
      this.countryService.getHighestLifeExpectancy().subscribe(
        (data) => {
          this.country = data;
          console.log(this.country);
          this.showLifeExpectancyDetails = true;
          this.dataHistory.push(JSON.stringify(data));
        },
        (error) => {
          console.error('Error fetching highest life expectancy:', error);
        }
      );
    } else {
      // Hide details if already shown
      this.showLifeExpectancyDetails = false;
    }
  }

  toggleData(index: number) {
    const data = this.dataHistory[index];
    this.countries = JSON.parse(data);
  }

}
