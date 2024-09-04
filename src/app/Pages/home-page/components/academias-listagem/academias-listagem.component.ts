import { Component } from '@angular/core';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-academias-listagem',
  standalone: true,
  imports: [DividerModule],
  templateUrl: './academias-listagem.component.html',
  styleUrl: './academias-listagem.component.scss'
})
export class AcademiasListagemComponent {
  academias = [
    { nome: 'Academia One', endereco: 'Rua A, 123', percentualOcupacao: 80 },
    { nome: 'Academia Fit', endereco: 'Rua B, 456', percentualOcupacao: 65 },
    { nome: 'Academia Fit', endereco: 'Rua B, 456', percentualOcupacao: 65 },
    { nome: 'Academia Fit', endereco: 'Rua B, 456', percentualOcupacao: 65 },
    { nome: 'Academia Fit', endereco: 'Rua B, 456', percentualOcupacao: 65 },
    { nome: 'Academia Fit', endereco: 'Rua B, 456', percentualOcupacao: 65 },
    { nome: 'Academia Fit', endereco: 'Rua B, 456', percentualOcupacao: 65 },
    { nome: 'Academia Fit', endereco: 'Rua B, 456', percentualOcupacao: 65 },
    { nome: 'Academia Power', endereco: 'Rua C, 789', percentualOcupacao: 90 }
  ];
}
