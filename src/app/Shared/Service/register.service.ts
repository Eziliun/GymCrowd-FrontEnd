import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterPayload } from '../Interface/request/IRegister';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl = environment.APIROUTE;

  constructor(private http: HttpClient) {}

  register(payload: RegisterPayload): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register_sede`, payload);
  }
}
