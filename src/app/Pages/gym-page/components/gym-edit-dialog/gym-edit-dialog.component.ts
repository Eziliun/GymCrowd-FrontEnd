import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { AcademiaService } from '../../../../Shared/Service/Academia.service';

@Component({
  selector: 'app-gym-edit-dialog',
  standalone: true,
  imports: [InputTextModule, ButtonModule, OverlayPanelModule],
  templateUrl: './gym-edit-dialog.component.html',
  styleUrls: ['./gym-edit-dialog.component.scss']
})
export class GymEditDialogComponent implements OnInit {
  academiaForm: FormGroup;
  sedeForm: FormGroup;
  quantidadeSedes: number = 3;

  constructor(
    private formBuilder: FormBuilder,
    private academiaService: AcademiaService,
  ) {
    this.academiaForm = this.formBuilder.group({
      cnpj: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      lotacaoMedia: [null, Validators.required]
    });

    this.sedeForm = this.formBuilder.group({
      nome: ['', Validators.required],
      endereco: ['', Validators.required],
      lotacao: [null, Validators.required]
    });
  }

  ngOnInit(): void {}

  saveAcademia(): void {
    if (this.academiaForm.invalid) {
      return;
    }

    const payload = this.academiaForm.value;

    this.academiaService.editAcademia(payload.cnpj, payload).subscribe(response => {
      console.log('Academia editada com sucesso', response);
    });
  }

  addSede(): void {
    if (this.sedeForm.invalid) {
      return;
    }

    const payload = this.sedeForm.value;

    this.academiaService.addSede(this.academiaForm.value.cnpj, payload).subscribe(response => {
      console.log('Sede adicionada com sucesso', response);
      this.sedeForm.reset();
    });
  }
}
