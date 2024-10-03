import { Component } from '@angular/core';
import { HeaderComponent } from '../../Shared/Components/header/header.component';
import { LeafletMapComponent } from '../../Shared/Components/leaflet-map/leaflet-map.component';
import { AcademiasListagemComponent } from './components/academias-listagem/academias-listagem.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
<<<<<<< HEAD
  imports: [LeafletMapComponent, AcademiasListagemComponent],
=======
  imports: [HeaderComponent, LeafletMapComponent, AcademiasListagemComponent],
>>>>>>> 3b155ec4b0422afc3b225604d56f7e23c801bc05
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
