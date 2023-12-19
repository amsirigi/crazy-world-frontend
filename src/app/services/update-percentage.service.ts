import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdatePercentageService {

  private baseUrl = 'http://localhost:8088/api/countrylang'; // Replace with your API base URL

  constructor(private http: HttpClient) { }

  updatePercentage(countryCode: string, language: string, percentage: number): Observable<any> {
    const url = `${this.baseUrl}/updatepercentage/${countryCode}/${language}/${percentage}`;
    return this.http.patch<any>(url, {});
  }
}
