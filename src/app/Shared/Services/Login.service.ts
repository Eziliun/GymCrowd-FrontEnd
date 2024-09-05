import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginPayload } from '../Interfaces/response/Ilogin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'https://seu-backend-api.com/login';

  constructor(private http: HttpClient) { }

  login(credentials: LoginPayload): Observable<any> {
    return this.http.post<any>(this.apiUrl, credentials);
  }
}
