import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateDistrictService {

  private baseUrl = 'http://localhost:8088/api/cities'; // Replace with your API base URL

  constructor(private http: HttpClient) { }

  updateDistrictForCity(cityName: string, newDistrict: string): Observable<any> {
    const url = `${this.baseUrl}/${cityName}/updatedistrict?newdistrict=${newDistrict}`;
    return this.http.patch<any>(url, {});
  }
}
