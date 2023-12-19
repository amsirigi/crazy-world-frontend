import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateOfficallangService {

  private baseUrl = 'http://localhost:8088/api/countrylang'; // Replace with your API base URL

  constructor(private http: HttpClient) { }

  setOfficialStatus(countryCode: string, language: string): Observable<any> {
    const url = `${this.baseUrl}/setofficial/${countryCode}/${language}`;
    return this.http.patch<any>(url, {});
  }
}
