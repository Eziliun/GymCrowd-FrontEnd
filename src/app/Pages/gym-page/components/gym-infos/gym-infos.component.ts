import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-gym-infos',
  standalone: true,
  imports: [InputTextModule, ButtonModule],
  templateUrl: './gym-infos.component.html',
  styleUrl: './gym-infos.component.scss'
})
export class GymInfosComponent {

}
