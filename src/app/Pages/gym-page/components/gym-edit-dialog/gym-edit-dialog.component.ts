import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AcademiaService } from '../../../../Shared/Service/Academia.service';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { ButtonModule } from 'primeng/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';

@Component({
  selector: 'app-gym-edit-dialog',
  standalone: true,
  imports: [InputTextModule, InputMaskModule, ButtonModule, OverlayPanelModule, ReactiveFormsModule,],
  templateUrl: './gym-edit-dialog.component.html',
  styleUrls: ['./gym-edit-dialog.component.scss']
})
export class GymEditDialogComponent implements OnInit {
  sedeForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private academiaService: AcademiaService
  ) {
    this.sedeForm = this.formBuilder.group({
      nome_fantasia: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  updateSede(): void {
    if (this.sedeForm.invalid) {
      console.error('Formulário inválido');
      console.log(this.sedeForm.value); 
      return;
    }
  
    const payload = { ...this.sedeForm.value };
  
    if (payload.telefone) {
      payload.telefone = payload.telefone.replace(/\D/g, '');
    }
  
    const academiaData = JSON.parse(localStorage.getItem('academiaData') || '{}');
    const cnpj = academiaData?.cnpj;
  
    if (typeof cnpj === 'string') {
      this.academiaService.editSede(cnpj, payload).subscribe({
        next: (response) => {
          console.log('Sede atualizada com sucesso', response);
  
          const updatedAcademiaData = {
            ...academiaData,
            nome_fantasia: response.nome_fantasia,
            telefone: response.telefone,
            email: response.email
          };
  
          localStorage.setItem('academiaData', JSON.stringify(updatedAcademiaData));
          console.log('Dados da academia atualizados no localStorage', updatedAcademiaData);
        },
        error: (error) => {
          console.error('Erro ao atualizar sede:', error);
        }
      });
    } else {
      console.error('Não foi possível obter o CNPJ da academia.');
    }
  }
  
}
