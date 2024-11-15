import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AcademiaService } from '../../../../Shared/Service/Academia.service';
import { DividerModule } from 'primeng/divider';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-academias-listagem',
  standalone: true,
  imports: [DividerModule, CommonModule],
  templateUrl: './academias-listagem.component.html',
  styleUrl: './academias-listagem.component.scss'
})
export class AcademiasListagemComponent implements OnInit {
  academias: any[] = [];

  constructor(private http: HttpClient, private academiaService: AcademiaService) { }

  ngOnInit(): void {
    const cnpj = JSON.parse(localStorage.getItem('academiaData') || '{}').cnpj;

    if (cnpj) {
      this.academiaService.getFilial(cnpj).subscribe(
        (data) => {
          this.academias = data;
        },
        (error) => {
          console.error('Erro ao buscar academias:', error);
        }
      );
    } else {
      console.warn('CNPJ não encontrado no local storage.');
    }
  }
}