import { Component } from '@angular/core';
import { HeaderComponent } from '../../Shared/Components/header/header.component';
import { LeafletMapComponent } from '../../Shared/Components/leaflet-map/leaflet-map.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent, LeafletMapComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
