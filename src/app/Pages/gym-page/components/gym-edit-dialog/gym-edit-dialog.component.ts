import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-gym-edit-dialog',
  standalone: true,
  imports: [InputTextModule, ButtonModule],
  templateUrl: './gym-edit-dialog.component.html',
  styleUrl: './gym-edit-dialog.component.scss'
})
export class GymEditDialogComponent {
  cnpj: string = '';
  email: string = '';
  lotacaoMedia: number | null = null;
  quantidadeSedes: number = 3;
}
