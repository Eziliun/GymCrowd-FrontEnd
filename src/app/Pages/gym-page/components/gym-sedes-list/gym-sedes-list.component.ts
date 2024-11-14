import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { AcademiaService } from '../../../../Shared/Service/Academia.service';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-gym-sedes-list',
  standalone: true,
  imports: [DividerModule, ButtonModule, OverlayPanelModule, CommonModule, DialogModule, ReactiveFormsModule, InputTextModule],
  templateUrl: './gym-sedes-list.component.html',
  styleUrls: ['./gym-sedes-list.component.scss']
})
export class GymSedesListComponent implements OnInit {
  sedeForm: FormGroup;
  activeOverlay: number | null = null;
  academias: Array<{ id: number; nome_fantasia: string; endereco: string; percentualOcupacao: number }> = [];
  noFiliaisMessage: string | null = null;
  displayDialog: boolean = false;


  constructor(
    private formBuilder: FormBuilder,
    private academiaService: AcademiaService
  ) {
    this.sedeForm = this.formBuilder.group({
      nome_fantasia: ['', Validators.required],
      endereco: ['', Validators.required],
      lotacao: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const academiaData = JSON.parse(localStorage.getItem('academiaData') || '{}');
    const cnpj = academiaData?.cnpj;

    if (cnpj) {
      this.academiaService.getFilial(cnpj).subscribe(
        (response) => {
          if (response && response.length > 0) {
            this.academias = response.map((filial: any, index: number) => ({
              id: index + 1,
              nome_fantasia: filial.nome_fantasia || 'Nome fantasia não disponível',
              endereco: filial.endereco || 'Endereço não disponível',
              percentualOcupacao: filial.percentualOcupacao || 0
            }));
          } else {
            this.noFiliaisMessage = 'Academia sem filiais';
          }
        },
        (error) => {
          console.error('Erro ao buscar filiais:', error);
          this.noFiliaisMessage = 'Sem Filiais';
        }
      );
    } else {
      this.noFiliaisMessage = 'CNPJ da academia não encontrado no localStorage';
    }
  }

  openDialog(): void {
    this.sedeForm.reset();
    this.displayDialog = true;
  }

  toggleOverlay(id: number): void {
    this.activeOverlay = this.activeOverlay === id ? null : id;
  }

  saveSede(): void {
    if (this.sedeForm.invalid) {
      console.log("ta errado")
      console.log(this.sedeForm.value)
      return;
    }

    const payload = this.sedeForm.value;
    this.academiaService.addFilial(payload).subscribe(
      (response) => {
        console.log('Sede adicionada com sucesso', response);
        this.sedeForm.reset();
        this.displayDialog = false;
        this.activeOverlay = null;
      },
      (error) => {
        console.error('Erro ao adicionar sede', error);
      }
    );
  }
  
}
