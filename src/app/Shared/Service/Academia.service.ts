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

  getAcademia(cnpj: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get_acad/${cnpj}`);
  }

  editAcademia(cnpj: string, payload: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/update_acad/${cnpj}`, payload);
  }

  addSede(cnpj: string, payload: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/add_sede/${cnpj}`, payload);
  }
  
  editSede(cnpj: string, sedeId: number, payload: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/edit_sede/${cnpj}/${sedeId}`, payload);
  }

  getSedes(cnpj: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get_sedes/${cnpj}`);
  }
}
