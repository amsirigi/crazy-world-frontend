import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from '../../model/country';
import { CountryService } from '../../services/country-service.service';


@Component({
  selector: 'country-list',
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.css'
})
export class CountryListComponent {

  constructor(private countryService: CountryService,
              private route:ActivatedRoute,
              private router:Router){}


  countries:Country[]=[];
  displayedCountries:Country[]=[];
  searchMode:boolean=false;
  
 

  ngOnInit():void{
    this.route.paramMap.subscribe(()=>{
     this.getCountries();
    });
  }



  getCountries(): void {
    this.countryService.getCountryDetails().subscribe(data => {
      console.log(data);
      this.countries = data;
      console.log(this.countries);
     
    });
  }


}
