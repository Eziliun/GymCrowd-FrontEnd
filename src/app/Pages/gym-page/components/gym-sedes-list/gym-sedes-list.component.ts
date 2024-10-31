import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { AcademiaService } from '../../../../Shared/Service/Academia.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gym-sedes-list',
  standalone: true,
  imports: [DividerModule, ButtonModule, OverlayPanelModule, CommonModule],
  templateUrl: './gym-sedes-list.component.html',
  styleUrls: ['./gym-sedes-list.component.scss']
})
export class GymSedesListComponent implements OnInit {
  sedeForm: FormGroup;
  activeOverlay: number | null = null;
  academias: Array<{ id: number; nome: string; endereco: string; percentualOcupacao: number }> = [];
  noFiliaisMessage: string | null = null;

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

  ngOnInit(): void {
    const academiaData = JSON.parse(localStorage.getItem('academiaData') || '{}');
    const cnpj = academiaData.cnpj;

    if (cnpj) {
      this.academiaService.getFilial(cnpj).subscribe(
        (response) => {
          if (response && response.length > 0) {
            this.academias = response.map((filial: any, index: number) => ({
              id: index + 1,
              nome: filial.nome_fantasia || 'Nome não disponível',
              endereco: filial.endereco || 'Endereço não disponível',
              percentualOcupacao: filial.percentualOcupacao || 0
            }));
          } else {
            this.noFiliaisMessage = 'Academia sem filiais';
          }
        },
        (error) => {
          console.error('Erro ao buscar filiais:', error);
          this.noFiliaisMessage = 'Erro ao buscar filiais';
        }
      );
    } else {
      this.noFiliaisMessage = 'CNPJ da academia não encontrado no localStorage';
    }
  }

  toggleOverlay(id: number): void {
    this.activeOverlay = this.activeOverlay === id ? null : id;
  }

  saveSede(academiaId: number): void {
    if (this.sedeForm.invalid) {
      return;
    }

    const payload = this.sedeForm.value;
    const cnpj = JSON.parse(localStorage.getItem('academiaData') || '{}').cnpj;

    if (cnpj) {
      this.academiaService.editSede(cnpj, academiaId, payload).subscribe(
        (response) => {
          console.log('Sede editada com sucesso', response);
          this.sedeForm.reset();
          this.activeOverlay = null;
        },
        (error) => {
          console.error('Erro ao editar sede', error);
        }
      );
    }
  }
}
