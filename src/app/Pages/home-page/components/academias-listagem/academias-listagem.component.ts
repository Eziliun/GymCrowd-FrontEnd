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
    { id: 1, nome: 'Academia One', endereco: 'Rua A, 123', percentualOcupacao: 80 },
    { id: 2, nome: 'Academia Fit', endereco: 'Rua B, 456', percentualOcupacao: 65 },
    { id: 3, nome: 'Academia Fit', endereco: 'Rua B, 456', percentualOcupacao: 65 },
    { id: 4, nome: 'Academia Fit', endereco: 'Rua B, 456', percentualOcupacao: 65 },
    { id: 5, nome: 'Academia Fit', endereco: 'Rua B, 456', percentualOcupacao: 65 },
    { id: 6, nome: 'Academia Fit', endereco: 'Rua B, 456', percentualOcupacao: 65 },
    { id: 7, nome: 'Academia Fit', endereco: 'Rua B, 456', percentualOcupacao: 65 },
    { id: 8, nome: 'Academia Fit', endereco: 'Rua B, 456', percentualOcupacao: 65 },
    { id: 9, nome: 'Academia Power', endereco: 'Rua C, 789', percentualOcupacao: 90 }
  ];
}
