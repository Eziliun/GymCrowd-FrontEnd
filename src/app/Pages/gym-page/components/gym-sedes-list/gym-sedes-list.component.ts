import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { AcademiaService } from '../../../../Shared/Service/Academia.service';

@Component({
  selector: 'app-gym-sedes-list',
  standalone: true,
  imports: [DividerModule, ButtonModule, OverlayPanelModule],
  templateUrl: './gym-sedes-list.component.html',
  styleUrls: ['./gym-sedes-list.component.scss']
})
export class GymSedesListComponent {
  sedeForm: FormGroup;

  activeOverlay: number | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private academiaService: AcademiaService
  ) {
    this.sedeForm = this.formBuilder.group({
      nome: ['', Validators.required],
      endereco: ['', Validators.required],
      lotacao: [null, Validators.required]
    });
  }

  academias = [
    { id: 1, nome: 'Academia One', endereco: 'Rua A, 123', percentualOcupacao: 80 },
    { id: 2, nome: 'Academia Fit', endereco: 'Rua B, 456', percentualOcupacao: 65 },
    { id: 3, nome: 'Academia Power', endereco: 'Rua C, 789', percentualOcupacao: 90 }
  ];

  toggleOverlay(id: number): void {
    this.activeOverlay = this.activeOverlay === id ? null : id;
  }

  saveSede(academiaId: number): void {
    if (this.sedeForm.invalid) {
      return;
    }

    const payload = this.sedeForm.value;

    this.academiaService.editSede('CNPJ_DA_ACADEMIA', academiaId, payload).subscribe(
      response => {
        console.log('Sede editada com sucesso', response);
        this.sedeForm.reset(); 
        this.activeOverlay = null;
      },
      error => {
        console.error('Erro ao editar sede', error);
      }
    );
  }
}