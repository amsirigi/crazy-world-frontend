import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { City } from '../model/city';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private baseUrl='http://localhost:8088/api/countries/getallcities';

  private url='http://localhost:8088/api/cities';

  private urlCountry='http://localhost:8088/api/countries'

  constructor( private httpclient:HttpClient) { }

  getCountryDetails():Observable<City[]> {
      return this.httpclient.get<City[]>(this.baseUrl);
    }


    getMaxPopulatedCity():Observable<City>{
      const urlCity=`${this.url}/maxpopulated`;
      return this.httpclient.get<City>(urlCity);
    }

    getTopTenPopulatedCities():Observable<City[]>{
      const urlCity=`${this.url}/toptenpopulatedcities`;
      return this.httpclient.get<City[]>(urlCity);
    }

    getPopulationAndLifeExpectancy(countryCode:string):Observable<any>{
      const urlPopulation=`${this.urlCountry}/${countryCode}/population`;
      return this.httpclient.get(urlPopulation, { responseType: 'text' });    }


      getCityList(countryName: string): Observable<City[]> {
        const url = `${this.url}/${countryName}/cities`;
        return this.httpclient.get<City[]>(url);
      }

      getFirstTenCitiesStartingWithChar(char: string): Observable<City[]> {
        const urlCity = `${this.url}/firsttencities/${char}`;
        return this.httpclient.get<City[]>(urlCity);
      }

      getUniqueDistricts(): Observable<City[]> {
        const urlCity = `${this.url}/districts`;
        return this.httpclient.get<City[]>(urlCity);
      }
     
      getAllCities(): Observable<City[]> {
        const urlCity = `${this.url}/getallcities`;
        return this.httpclient.get<City[]>(urlCity);
      }
}
