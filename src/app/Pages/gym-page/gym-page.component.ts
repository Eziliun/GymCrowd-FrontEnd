import { Component, OnInit } from '@angular/core';
import { GymInfosComponent } from './components/gym-infos/gym-infos.component';
import { DividerModule } from 'primeng/divider';
import { GymSedesListComponent } from './components/gym-sedes-list/gym-sedes-list.component';
import { HeaderComponent } from '../../Shared/Components/header/header.component';
import { AcademiaService } from '../../Shared/Service/Academia.service';


@Component({
  selector: 'app-gym-page',
  standalone: true,
  imports: [GymInfosComponent, GymSedesListComponent, HeaderComponent],
  templateUrl: './gym-page.component.html',
  styleUrl: './gym-page.component.scss'
})
export class GymPageComponent implements OnInit {
  academiaData: any;

  constructor(private academiaService: AcademiaService) {}

  ngOnInit(): void {
    const cnpjMockado = '12345678901234'; 

    this.academiaService.getAcademia(cnpjMockado).subscribe({
      next: (resp) => {
        this.academiaData = resp;
        console.log('Dados da academia:', this.academiaData);
      },
      error: (error) => {
        console.error('Erro ao obter dados da academia:', error);
      }
    });
  }
}
