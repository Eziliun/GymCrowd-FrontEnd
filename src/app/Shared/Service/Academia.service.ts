import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AcademiaService {
  private apiUrl = environment.APIROUTE;

  constructor(private http: HttpClient) {}

  getAcademia(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get_academia/${id}`);
  }

  editAcademia(id: string, payload: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/edit_academia/${id}`, payload);
  }
}
