import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateGnpService {

  private baseUrl = 'http://localhost:8088/api/countries'; // Replace with your API base URL

  constructor(private http: HttpClient) { }

  updateGnp(name: string, updates: any): Observable<any> {
    const url = `${this.baseUrl}/updategnp/${name}`;
    return this.http.patch<any>(url, updates);
  }

}
