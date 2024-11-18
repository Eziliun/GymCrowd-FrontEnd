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

  editSede(cnpj: string, payload: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/update_sede/${cnpj}`, payload);
  }

  addFilial(payload: any): Observable<any> {
    const cnpj = JSON.parse(localStorage.getItem('academiaData') || '{}').cnpj;
    const fullPayload = { cnpj_matriz: cnpj, ...payload };
    return this.http.post<any>(`${this.apiUrl}/register_filial`, fullPayload);
  }
  
  
  editFilial(cnpj: string, sedeId: number, payload: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/edit_sede/${cnpj}/${sedeId}`, payload);
  }

  getFilial(cnpjMatriz: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get_all_filiais/${cnpjMatriz}`);
  }
}
