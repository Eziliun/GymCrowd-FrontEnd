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
    { id: 1, nome_fantasia: 'Academia One', endereco: 'Rua A, 123', percentualOcupacao: 80 },
    { id: 2, nome_fantasia: 'Academia Fit', endereco: 'Rua B, 456', percentualOcupacao: 65 },
    { id: 3, nome_fantasia: 'Academia Fit', endereco: 'Rua B, 456', percentualOcupacao: 65 },
    { id: 4, nome_fantasia: 'Academia Fit', endereco: 'Rua B, 456', percentualOcupacao: 65 },
    { id: 5, nome_fantasia: 'Academia Fit', endereco: 'Rua B, 456', percentualOcupacao: 65 },
    { id: 6, nome_fantasia: 'Academia Fit', endereco: 'Rua B, 456', percentualOcupacao: 65 },
    { id: 7, nome_fantasia: 'Academia Fit', endereco: 'Rua B, 456', percentualOcupacao: 65 },
    { id: 8, nome_fantasia: 'Academia Fit', endereco: 'Rua B, 456', percentualOcupacao: 65 },
    { id: 9, nome_fantasia: 'Academia Power', endereco: 'Rua C, 789', percentualOcupacao: 90 }
  ];
}
