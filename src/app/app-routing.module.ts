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
import { CountryLanguageComponent } from './components/country-language/country-language.component';
import { UniqueLanguagesComponent } from './components/unique-languages/unique-languages.component';
import { CountryLanguagesComponent } from './components/country-languages/country-languages.component';
import { MaxSpokenLanguageByCodeComponent } from './components/max-spoken-language-by-code/max-spoken-language-by-code.component';
import { MaxSpokenLanguagesComponent } from './components/max-spoken-languages/max-spoken-languages.component';
import { OfficialLanguagesComponent } from './components/official-languages/official-languages.component';
import { UnofficialLanguagesComponent } from './components/unofficial-languages/unofficial-languages.component';
import { DistrictByCodeComponent } from './components/district-by-code/district-by-code.component';
import { DistrictAvgPopulationComponent } from './components/district-avg-population/district-avg-population.component';
import { CountryCityCountComponent } from './components/country-city-count/country-city-count.component';
import { LoginComponent } from './components/login/login.component';
import { LogindisplayComponent } from './components/logindisplay/logindisplay.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'login',component: LoginComponent},
  {path:'logout',component: LoginComponent},
  {path:'logindisplay',component: LogindisplayComponent},
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
      { path: 'countryCode', component: DistrictByCodeComponent },
      { path: 'district-avg-population', component:  DistrictAvgPopulationComponent},
      { path: 'citycount', component:  CountryCityCountComponent},
      
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
  { path: 'country-language', component: CountryLanguageComponent},
  { path:'lang',
  component: CountryLanguageComponent,
children:[
  { path: 'unique-languages', component: UniqueLanguagesComponent},
  { path: 'country-languages', component: CountryLanguagesComponent },
  { path: 'official-languages', component: OfficialLanguagesComponent },
  { path: 'unofficial-languages', component: UnofficialLanguagesComponent },
  { path: 'max-spoken-languages', component: MaxSpokenLanguagesComponent },
  { path: 'max-spoken-language-by-code', component: MaxSpokenLanguageByCodeComponent },
] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
