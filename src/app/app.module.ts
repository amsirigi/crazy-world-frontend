import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { TermsOfUseComponent } from './components/terms-of-use/terms-of-use.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { CountryListComponent } from './components/country-list/country-list.component';
import { CountryService } from './services/country-service.service';
import { HttpClientModule } from '@angular/common/http';
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
import { FormsModule } from '@angular/forms';
import { CityListComponent } from './components/city-list/city-list.component';
import { RegionLanguagesComponent } from './components/region-languages/region-languages.component';
import { FirstTenCitiesComponent } from './components/first-ten-cities/first-ten-cities.component';
import { DistrictListComponent } from './components/district-list/district-list.component';
import { AllCitiesComponent } from './components/all-cities/all-cities.component';
import { CountryLanguageComponent } from './components/country-language/country-language.component';
import { UniqueLanguagesComponent } from './components/unique-languages/unique-languages.component';
import { OfficialLanguagesComponent } from './components/official-languages/official-languages.component';
import { MaxSpokenLanguagesComponent } from './components/max-spoken-languages/max-spoken-languages.component';
import { MaxSpokenLanguageByCodeComponent } from './components/max-spoken-language-by-code/max-spoken-language-by-code.component';
import { UnofficialLanguagesComponent } from './components/unofficial-languages/unofficial-languages.component';
import { CountryLanguagesComponent } from './components/country-languages/country-languages.component';
import { RouterModule } from '@angular/router';
import { DistrictByCodeComponent } from './components/district-by-code/district-by-code.component';
import { DistrictAvgPopulationComponent } from './components/district-avg-population/district-avg-population.component';
import { CountryCityCountComponent } from './components/country-city-count/country-city-count.component';
import { LogoutComponent } from './components/logout/logout.component';
import { LogindisplayComponent } from './components/logindisplay/logindisplay.component';
import { LoginComponent } from './components/login/login.component';
import { UpdateCitypopulationComponent } from './components/update-citypopulation/update-citypopulation.component';
import { UpdateDirstictComponent } from './components/update-dirstict/update-dirstict.component';
import { UpdateGnpComponent } from './components/update-gnp/update-gnp.component';
import { UpdateHeadOfStateComponent } from './components/update-head-of-state/update-head-of-state.component';
import { UpdatePercentageComponent } from './components/update-percentage/update-percentage.component';
import { UpdatePopulationComponent } from './components/update-population/update-population.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AboutUsComponent,
    TermsOfUseComponent,
    HomePageComponent,
    HeaderComponent,
    CountryListComponent,
    CountrydetailsComponent,
    WorldFactsComponent,
    PopulatedcountriesComponent,
    HighestLifeExpectancyComponent,
    UniqueGovernmentFormsComponent,
    TopTenGnpCountriesComponent,
    MaxPopulatedCityComponent,
    TopTenPopulatedCitiesComponent,
    CountryCitiesComponent,
    PopulationInfoComponent,
    CityListComponent,
    RegionLanguagesComponent,
    FirstTenCitiesComponent,
    DistrictListComponent,
    AllCitiesComponent,
    CountryLanguageComponent,
    UniqueLanguagesComponent,
    CountryLanguagesComponent,
    OfficialLanguagesComponent,
    UnofficialLanguagesComponent,
    MaxSpokenLanguagesComponent,
    MaxSpokenLanguageByCodeComponent,
    DistrictByCodeComponent,
    DistrictAvgPopulationComponent,
    CountryCityCountComponent,
    LoginComponent,
    LogindisplayComponent,
    LogoutComponent,
    UpdateHeadOfStateComponent,
    UpdateGnpComponent,
    UpdatePopulationComponent,
    UpdatePercentageComponent,
    UpdateDirstictComponent,
    UpdateCitypopulationComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    FormsModule
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
