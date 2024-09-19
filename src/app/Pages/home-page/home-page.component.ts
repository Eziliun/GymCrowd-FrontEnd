import { Component } from '@angular/core';
import { HeaderComponent } from '../../Shared/Components/header/header.component';
import { LeafletMapComponent } from '../../Shared/Components/leaflet-map/leaflet-map.component';
import { AcademiasListagemComponent } from './components/academias-listagem/academias-listagem.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent, LeafletMapComponent, AcademiasListagemComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
