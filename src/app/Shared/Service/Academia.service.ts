import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
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

  getAllAcads(): Observable<any[]> {
    return this.http.get<any>(`${this.apiUrl}/get_all_acads`).pipe(
      map((response: { Acads: any; }) => response.Acads || [])
    );
  }
  
  addFilial(payload: any): Observable<any> {
    const cnpj = JSON.parse(localStorage.getItem('academiaData') || '{}').cnpj;
    const fullPayload = { cnpj_matriz: cnpj, ...payload };
    return this.http.post<any>(`${this.apiUrl}/register_filial`, fullPayload);
  }

  deleteFilial(nomeFilial: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/delete-filial/${nomeFilial}`);
  }

  editFilial(nomeFilial: string, payload: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/update_filial/${nomeFilial}`, payload);
  }  

  getFilial(cnpjMatriz: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get_all_filiais/${cnpjMatriz}`);
  }
}
