import { Component } from '@angular/core';
import { GymInfosComponent } from './components/gym-infos/gym-infos.component';
import { DividerModule } from 'primeng/divider';
import { GymSedesListComponent } from './components/gym-sedes-list/gym-sedes-list.component';
import { HeaderComponent } from '../../Shared/Components/header/header.component';


@Component({
  selector: 'app-gym-page',
  standalone: true,
  imports: [GymInfosComponent, GymSedesListComponent, HeaderComponent],
  templateUrl: './gym-page.component.html',
  styleUrl: './gym-page.component.scss'
})
export class GymPageComponent {

}
