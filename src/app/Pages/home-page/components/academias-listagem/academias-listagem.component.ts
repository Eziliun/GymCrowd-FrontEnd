import { Component, OnInit } from '@angular/core';
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
  loading: boolean = true;

  constructor(private academiaService: AcademiaService) {}

  ngOnInit(): void {
    this.academiaService.getAllAcads().subscribe({
      next: (data) => {
        this.academias = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Erro ao buscar academias:', error);
        this.loading = false;
      }
    });
  }
}
