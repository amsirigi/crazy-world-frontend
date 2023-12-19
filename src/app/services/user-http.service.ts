import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auth } from '../model/auth';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {
  [x: string]: any;
  baseUrl: string = "http://localhost:8088/api/login";
  constructor(private httpClient: HttpClient) { }

  validate(newUser: User): Observable<Auth>{
    return this.httpClient.post<Auth>(this.baseUrl, newUser);
  }

  
}
