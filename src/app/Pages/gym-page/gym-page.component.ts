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

}
}
