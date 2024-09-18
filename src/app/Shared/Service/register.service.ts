import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterPayload } from '../Interface/request/IRegister';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl = 'https://seu-backend-url.com/api/login';

  constructor(private http: HttpClient) {}

  register(payload: RegisterPayload): Observable<any> {
    return this.http.post<any>(this.apiUrl, payload);
  }
}
