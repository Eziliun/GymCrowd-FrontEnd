import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginPayload } from '../Interface/request/ILogin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'https://seu-backend-url.com/api/login'; // Altere para o endpoint real

  constructor(private http: HttpClient) {}

  login(payload: LoginPayload): Observable<any> {
    return this.http.post<any>(this.apiUrl, payload);
  }
}
