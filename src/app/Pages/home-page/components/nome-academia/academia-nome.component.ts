import { Component, input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


interface Academia{
  nome:string;
  cnpj:string;
  email:string;
  celular:string
}

@Component({
  selector: 'app-academia-nome',
  templateUrl: './academia-nome.component.html', 
  styleUrls: ['./academia-nome.components.scss']
})
export class AcademiaNomeComponents{
  @input() AcademiasListagemComponent: Academia;
}
