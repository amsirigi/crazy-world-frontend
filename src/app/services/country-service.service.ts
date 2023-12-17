import { Injectable } from '@angular/core';
import { Country } from '../model/country';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CountryLanguage } from '../model/country-language';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private baseUrl='http://localhost:8088/api/countries/getAllCountries';

  private url='http://localhost:8088/api/countries'

  constructor( private httpclient:HttpClient) { }

  getCountryDetails():Observable<Country[]> {
      return this.httpclient.get<Country[]>(this.baseUrl);
    }


    getCountryDetailsByName(countryName:string):Observable<Country>{
      const url=`${this.url}/${countryName}`;
      return this.httpclient.get<Country>(url);

    }


    getTopTenPopulatedCountries(): Observable<Country[]> {
      const url = `${this.url}/toptenpopulated`;
      return this.httpclient.get<Country[]>(url);
    }


    getHighestLifeExpectancy():Observable<Country>{
      const url = `${this.url}/highestlifeexpectancy`;
      return this.httpclient.get<Country>(url);
    }
    getUniqueGovernmentForms():Observable<Country[]>{
      const url = `${this.url}/uniquegovermentforms`;
      return this.httpclient.get<Country[]>(url);
    }

    getTopTenGnpCountries(){
      const url = `${this.url}/toptengnp`;
      return this.httpclient.get<Country[]>(url);
    }

    getLanguagesInRegion(region:string):Observable<CountryLanguage[]>{
      const urlRegion=`${this.url}/${region}/alllanguages`;
      return this.httpclient.get<CountryLanguage[]>(urlRegion);
    }
}
