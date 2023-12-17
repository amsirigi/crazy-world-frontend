import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryLanguageService {
  private baseUrl = 'http://localhost:8088/api/countrylang'; // Update with your backend URL
  

  constructor(private http: HttpClient) {}

  getAllUniqueLanguages(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getCountryLanguagesByCode(countryCode: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${countryCode}`);
  }

  
  getAllOfficialCountryLanguages(): Observable<any> {
    return this.http.get(`${this.baseUrl}/allofficial`);
  }

  getUnofficialCountryLanguagesByCode(countryCode: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/unofficial/${countryCode}`);
  }
  getMaxSpokenLanguages(): Observable<any> {
    return this.http.get(`${this.baseUrl}/maxspokenlang`);
  }

  getMaxSpokenLanguageByCode(countryCode: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/maxspokenlang/${countryCode}`);
  }
  updatePercentage(countryCode: string, language: string, percentage: number): Observable<any> {
    return this.http.patch(`${this.baseUrl}/updatepercentage/${countryCode}/${language}/${percentage}`, {});
  }

  setOfficialStatus(countryCode: string, language: string): Observable<any> {
    return this.http.patch(`${this.baseUrl}/setofficial/${countryCode}/${language}`, {});
  }
}

  // Add methods for other endpoints...

