import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
<<<<<<< HEAD
import { Observable, tap } from 'rxjs';
import { LoginPayload } from '../Interface/request/ILogin';
import { environment } from '../../environment/environment';
=======
import { Observable } from 'rxjs';
import { LoginPayload } from '../Interface/request/ILogin';
>>>>>>> 3b155ec4b0422afc3b225604d56f7e23c801bc05

@Injectable({
  providedIn: 'root'
})
export class LoginService {
<<<<<<< HEAD
  private apiUrl = environment.APIROUTE;
  private tokenKey = 'authToken';
=======
  private apiUrl = 'https://seu-backend-url.com/api/login'; // Altere para o endpoint real
>>>>>>> 3b155ec4b0422afc3b225604d56f7e23c801bc05

  constructor(private http: HttpClient) {}

  login(payload: LoginPayload): Observable<any> {
<<<<<<< HEAD
    return this.http.post<any>(`${this.apiUrl}/login_acad`, payload).pipe(
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
=======
    return this.http.post<any>(this.apiUrl, payload);
  }
}
>>>>>>> 3b155ec4b0422afc3b225604d56f7e23c801bc05
