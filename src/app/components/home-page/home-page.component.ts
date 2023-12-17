import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {


  constructor(private route:Router){}



  goToCountries(){
    this.route.navigate(['countries']);
  }


  goToFacts(){
    this.route.navigate(['facts'])
  }


  onSearchClick(value:string){
    this.route.navigateByUrl(`/search/${value}`);
  }

  goToCodes(){
    this.route.navigate(['find']);
  }



}
