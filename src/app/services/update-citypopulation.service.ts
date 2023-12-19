import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateCitypopulationService {
  private baseUrl = 'http://localhost:8088/api/cities'; // Replace with your API base URL

  constructor(private http: HttpClient) { }

  updateCityPopulation(cityName: string, newPopulation: number): Observable<any> {
    const url = `${this.baseUrl}/updatepopulation/${cityName}?newpopulation=${newPopulation}`;
    return this.http.patch<any>(url, {});
  }

}
