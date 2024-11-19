import { Component, AfterViewInit, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { AcademiaService } from '../../Service/Academia.service';

@Component({
  selector: 'app-leaflet-map',
  standalone: true,
  imports: [],
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.scss']
})
export class LeafletMapComponent implements AfterViewInit, OnInit {
  private map: L.Map | undefined;
  private userMarker: L.Marker | undefined;

  constructor(private academiaService: AcademiaService) {}

  ngOnInit(): void {
    this.loadAcademias();
  }

  ngAfterViewInit(): void {
    this.initMap();
    this.locateUser();
  }

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

  private loadAcademias(): void {
    this.academiaService.getAllAcads().subscribe({
      next: (academias: any[]) => {
        academias.forEach((academia: { latitude: number; longitude: number; nome_fantasia: string; endereco: string; }) => {
          this.addAcademiaMarker(academia.latitude, academia.longitude, academia.nome_fantasia, academia.endereco);
        });
      },
      error: (error: any) => {
        console.error('Erro ao buscar academias:', error);
      }
    });
  }

  private addAcademiaMarker(lat: number, lng: number, nome: string, endereco: string): void {
    if (this.map) {
      const customIcon = L.icon({
        iconUrl: 'assets/pngtree-colorful-map-marker-icon-isolated-on-white-background-eps-10-picture-image_8048922.png',
        iconSize: [40, 40], 
        iconAnchor: [20, 40], 
        popupAnchor: [0, -40] 
      });
  
      const marker = L.marker([lat, lng], { icon: customIcon }).addTo(this.map);
      marker.bindPopup(`<b>${nome}</b><br>${endereco}`);
    }
  }
  
}
