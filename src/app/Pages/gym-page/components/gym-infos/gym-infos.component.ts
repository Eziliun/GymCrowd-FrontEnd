import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-gym-infos',
  standalone: true,
  imports: [InputTextModule],
  templateUrl: './gym-infos.component.html',
  styleUrl: './gym-infos.component.scss'
})
export class GymInfosComponent {

}
