import { Component } from '@angular/core';
import { Country } from '../../model/country';
import { CountryService } from '../../services/country-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'countrydetails',
  templateUrl: './countrydetails.component.html',
  styleUrl: './countrydetails.component.css'
})
export class CountrydetailsComponent {

  countries: Country | null = null;
  constructor(private countryService: CountryService,
    private route:ActivatedRoute,
    private router:Router){}

  ngOnInit(){
    this.route.paramMap.subscribe(()=>{
      this.getCountryDetails();
    });
  }
  getCountryDetails() {
    const countryName = this.route.snapshot.paramMap.get('keyword');
    console.log(countryName);
  
    if (countryName !== null) {
      this.countryService.getCountryDetailsByName(countryName).subscribe(
        (data) => {
          this.countries = data;
          console.log(this.countries);
        },
        (error) => {
          console.error('Error fetching country details:', error);
          // You might want to handle the error in a way appropriate for your application
        }
      );
    } else {
      console.error('Country name is null.'); 
      // Handle the case where countryName is null, maybe redirect or display an error message
    }
  }
  
  

   


  
}
