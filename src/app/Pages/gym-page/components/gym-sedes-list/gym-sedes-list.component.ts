import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AcademiaService } from '../../../../Shared/Service/Academia.service';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-gym-sedes-list',
  standalone: true,
  imports: [CommonModule, DialogModule, InputTextModule, ButtonModule, ReactiveFormsModule],
  templateUrl: './gym-sedes-list.component.html',
  styleUrls: ['./gym-sedes-list.component.scss']
})
export class GymSedesListComponent implements OnInit {
  @Output() totalSedesChange = new EventEmitter<number>();
  academias: Array<{ nome_fantasia: string; endereco: string; percentualOcupacao: number }> = [];
  noFiliaisMessage: string | null = null;
  displayDialog: boolean = false;

  editingFilial: any = null; 
  displayEditDialog: boolean = false; 


  sedeForm: FormGroup;

  constructor(private academiaService: AcademiaService, private formBuilder: FormBuilder) {
    this.sedeForm = this.formBuilder.group({
      nome_fantasia: ['', Validators.required],
      endereco: ['', Validators.required],
      lotacao: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    });
  }

  ngOnInit(): void {
    const academiaData = JSON.parse(localStorage.getItem('academiaData') || '{}');
    const cnpj = academiaData?.cnpj;

    if (cnpj) {
      this.academiaService.getFilial(cnpj).subscribe({
        next: (response) => {
          if (response?.Acads?.length > 0) {
            this.academias = response.Acads.map((filial: any) => ({
              nome_fantasia: filial.nome_fantasia || 'Nome fantasia não disponível',
              endereco: filial.endereco || 'Endereço não disponível',
              percentualOcupacao: parseInt(filial.lotacao, 10) || 0,
            }));
            this.atualizarTotalSedes(); 
          } else {
            this.noFiliaisMessage = 'Nenhuma academia encontrada.';
          }
        },
        error: (err) => {
          console.error('Erro ao buscar academias:', err);
          this.noFiliaisMessage = 'Erro ao carregar academias.';
        }
      });
    } else {
      this.noFiliaisMessage = 'CNPJ da academia não encontrado no localStorage.';
    }

    this.atualizarTotalSedes();
  }

  openDialog(): void {
    this.sedeForm.reset();
    this.displayDialog = true;
  }

  private atualizarTotalSedes(): void {
    const totalSedes = this.academias.length;
    this.totalSedesChange.emit(totalSedes);  
    console.log(totalSedes);
    
  }

  saveSede(): void {
    if (this.sedeForm.invalid) {
      console.error('Formulário inválido:', this.sedeForm.value);
      return;
    }

    const payload = {
      nome_fantasia: this.sedeForm.value.nome_fantasia,
      endereco: this.sedeForm.value.endereco,
      lotacao: parseInt(this.sedeForm.value.lotacao, 10),
    };

    this.academiaService.addFilial(payload).subscribe({
      next: (response) => {
        console.log('Academia adicionada com sucesso:', response);
        this.academias.push({
          nome_fantasia: payload.nome_fantasia,
          endereco: payload.endereco,
          percentualOcupacao: payload.lotacao,
        });
        this.displayDialog = false;
        this.atualizarTotalSedes();
      },
      error: (err) => {
        console.error('Erro ao adicionar academia:', err);
      }
    });
  }

  deleteFilial(nomeFilial: string): void {
    if (confirm(`Tem certeza que deseja excluir a filial: ${nomeFilial}?`)) {
      this.academiaService.deleteFilial(nomeFilial).subscribe({
        next: (response) => {
          console.log('Filial excluída com sucesso:', response);
          this.academias = this.academias.filter(academia => academia.nome_fantasia !== nomeFilial);
          this.atualizarTotalSedes();
        },
        error: (err) => {
          console.error('Erro ao excluir a filial:', err);
        }
      });
    }
  }


  editFilial(academia: any): void {
    this.editingFilial = academia;
    this.sedeForm.patchValue({
      nome_fantasia: academia.nome_fantasia,
      endereco: academia.endereco,
      lotacao: academia.percentualOcupacao,
    });
    this.displayEditDialog = true;
  }
  
  saveEditedFilial(): void {
    if (this.sedeForm.invalid) {
      console.error('Formulário inválido:', this.sedeForm.value);
      return;
    }
  
    const payload = {
      nome_fantasia: this.sedeForm.value.nome_fantasia,
      endereco: this.sedeForm.value.endereco,
      lotacao: parseInt(this.sedeForm.value.lotacao, 10),
    };
  
    const originalName = this.editingFilial.nome_fantasia;
  
    this.academiaService.editFilial(originalName, payload).subscribe({
      next: (response) => {
        console.log('Filial editada com sucesso:', response);
        const index = this.academias.findIndex(academia => academia.nome_fantasia === originalName);
        if (index !== -1) {
          this.academias[index] = {
            nome_fantasia: payload.nome_fantasia,
            endereco: payload.endereco,
            percentualOcupacao: payload.lotacao,
          };
        }
        this.displayEditDialog = false;
      },
      error: (err) => {
        console.error('Erro ao editar filial:', err);
      },
    });
  }
  
}
