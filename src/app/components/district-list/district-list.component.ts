import { Component } from '@angular/core';
import { CityService } from '../../services/city.service';
import { City } from '../../model/city';

@Component({
  selector: 'app-district-list',
  templateUrl: './district-list.component.html',
  styleUrl: './district-list.component.css'
})
export class DistrictListComponent {

  cities:City[]=[];
  constructor(private cityService: CityService) {}

  ngOnInit() {
    this.getUniqueDistricts();
  }
 
  getUniqueDistricts(): void {
    this.cityService.getUniqueDistricts().subscribe(data=>{
      this.cities = data;
      console.log('districts',this.cities);
    });
   
 
  }
}
