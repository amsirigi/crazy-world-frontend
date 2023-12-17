import { Component } from '@angular/core';
import { CityService } from '../../services/city.service';
import { ActivatedRoute, Router } from '@angular/router';
import { City } from '../../model/city';

@Component({
  selector: 'app-country-cities',
  templateUrl: './country-cities.component.html',
  styleUrl: './country-cities.component.css'
})
export class CountryCitiesComponent {

  cities: City | null = null;

  constructor(private cityService: CityService,
    private route:ActivatedRoute,
    private router:Router){}
  ngOnInit(){
    this.route.paramMap.subscribe(()=>{
      this.getCountryDetails();
    });
  }

  getCountryDetails(){

  }
}
