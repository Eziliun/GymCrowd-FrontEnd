
import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-leaflet-map',
  standalone: true,
  imports: [],
  templateUrl: './leaflet-map.component.html',
  styleUrl: './leaflet-map.component.scss'
})
export class LeafletMapComponent implements AfterViewInit {
  private map: L.Map | undefined;
  private userMarker: L.Marker | undefined;

  private initMap(): void {
    this.map = L.map('map', {
      center: [-3.737454, -38.5393108],
      zoom: 13
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  private locateUser(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          this.userMarker = L.marker([latitude, longitude]).addTo(this.map!);
          this.userMarker.bindPopup('Você está aqui!').openPopup();

          this.map?.setView([latitude, longitude], 15);
        },
        (error) => {
          console.error("Erro ao obter a localização do usuário:", error);
        }
      );
    } else {
      console.warn("Geolocalização não é suportada por este navegador.");
    }
  }

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
    this.locateUser();
  }
}