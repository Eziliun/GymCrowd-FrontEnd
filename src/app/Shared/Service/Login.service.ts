import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { LoginPayload } from '../Interface/request/ILogin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'https://seu-backend-url.com/api/login'; // Altere para o endpoint real
  private tokenKey = 'authToken';

  constructor(private http: HttpClient) {}

  login(payload: LoginPayload): Observable<any> {
    return this.http.post<any>(this.apiUrl, payload).pipe(
      tap(response => {
        
        this.saveToken(response.token);
      })
    );
  }

  private saveToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  }
  

// (`${this.apiUrl}/api/slide`)