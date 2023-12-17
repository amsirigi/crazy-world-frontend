import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { TermsOfUseComponent } from './components/terms-of-use/terms-of-use.component';
import { CountryListComponent } from './components/country-list/country-list.component';
import { CountrydetailsComponent } from './components/countrydetails/countrydetails.component';
import { WorldFactsComponent } from './components/world-facts/world-facts.component';
import { PopulatedcountriesComponent } from './components/populatedcountries/populatedcountries.component';
import { HighestLifeExpectancyComponent } from './components/highest-life-expectancy/highest-life-expectancy.component';
import { UniqueGovernmentFormsComponent } from './components/unique-government-forms/unique-government-forms.component';
import { TopTenGnpCountriesComponent } from './components/top-ten-gnp-countries/top-ten-gnp-countries.component';
import { MaxPopulatedCityComponent } from './components/max-populated-city/max-populated-city.component';
import { TopTenPopulatedCitiesComponent } from './components/top-ten-populated-cities/top-ten-populated-cities.component';
import { CountryCitiesComponent } from './components/country-cities/country-cities.component';
import { PopulationInfoComponent } from './components/population-info/population-info.component';
import { CityListComponent } from './components/city-list/city-list.component';
import { RegionLanguagesComponent } from './components/region-languages/region-languages.component';
import { FirstTenCitiesComponent } from './components/first-ten-cities/first-ten-cities.component';
import { DistrictListComponent } from './components/district-list/district-list.component';
import { AllCitiesComponent } from './components/all-cities/all-cities.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'terms-of-use',component:TermsOfUseComponent},
  {path:'countries', component: CountryListComponent },
  {path:'country/:keyword', component: CountrydetailsComponent },
  {path:'search/:keyword', component: CountrydetailsComponent },
  {path:'facts', component: WorldFactsComponent},
  {path:'Populatedcountries', component: WorldFactsComponent},
  {
    path:'facts',
    component: WorldFactsComponent,
    children: [
      { path: 'populated-countries', component: PopulatedcountriesComponent },
      { path: 'highest-life-expectancy', component: HighestLifeExpectancyComponent },
      { path: 'unique-government-forms', component: UniqueGovernmentFormsComponent },
      { path: 'top-ten-gnp-countries', component: TopTenGnpCountriesComponent },
      { path: 'maxpopulatedcity', component: MaxPopulatedCityComponent },
      { path: 'toptenpopulatedcities', component: TopTenPopulatedCitiesComponent },
      
    ]
  },
  {
    path:'find',
    component: CountryCitiesComponent,
    children: [
      { path: 'population-info', component: PopulationInfoComponent },
      { path: 'cities', component: CityListComponent },      
      { path: 'region', component: RegionLanguagesComponent },
      { path: 'first-ten-cities', component: FirstTenCitiesComponent },
      { path: 'unique-districts', component: DistrictListComponent }, 
      { path: 'all-cities', component: AllCitiesComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
