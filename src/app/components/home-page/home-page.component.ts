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



  items = [
    {
      name:"Crazy World Facts",
      description:"Travel more intelligently with The World Factbook Travel Facts. Here’s what you should know about each country before you go."
    },
    {
      name:"One-page Country Summaries",
      description:"Pressed for time? Check out our one-page summaries for essential information on each country."
    },
    {
      name:"Flags of the World",
      description:"Every flag has a story. View flags of all the world’s countries and territories to learn the symbolism behind each design."
    },
    {
      name:"Global Governance Mosaic",
      description:"              Exploring Unique and Diverse Forms of Government Worldwide"
    }
  
  ] 
}
