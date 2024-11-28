import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AcademiaService } from '../../../../Shared/Service/Academia.service';
import { DividerModule } from 'primeng/divider';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import {
  Chart,
  ChartConfiguration,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarController, BarElement, Title, Tooltip, Legend);

@Component({
  selector: 'app-academias-listagem',
  standalone: true,
  imports: [DividerModule, CommonModule, DialogModule],
  templateUrl: './academias-listagem.component.html',
  styleUrl: './academias-listagem.component.scss',
})
export class AcademiasListagemComponent implements OnInit {
  academias: any[] = [];
  loading: boolean = true;

  displayDialog: boolean = false;
  selectedAcademia: any = null;

  @ViewChild('chartCanvas', { static: false }) chartCanvas!: ElementRef<HTMLCanvasElement>;
  private chartInstance!: Chart;

  constructor(private academiaService: AcademiaService) {}

  ngOnInit(): void {
    this.academiaService.getAllAcads().subscribe({
      next: (data) => {
        this.academias = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Erro ao buscar academias:', error);
        this.loading = false;
      },
    });
  }

  openDialog(academia: any): void {
    this.selectedAcademia = academia;
    this.displayDialog = true;

    setTimeout(() => this.generateChart(), 0);
  }

  closeDialog(): void {
    this.displayDialog = false;

    if (this.chartInstance) {
      this.chartInstance.destroy();
    }
  }

  private generateChart(): void {
    if (this.chartInstance) {
      this.chartInstance.destroy();
    }

    const canvas = this.chartCanvas.nativeElement.getContext('2d');

    const labels = ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'];
    const data = labels.map(() => Math.floor(Math.random() * 100));

    const config: ChartConfiguration = {
      type: 'bar',
      data: {
        labels,
        datasets: [
          {
            label: `Lotação por Hora - ${this.selectedAcademia.nome_fantasia}`,
            data,
            backgroundColor: 'rgba(255, 99, 71, 0.5)',
            borderColor: 'rgba(255, 99, 71, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Lotação da Academia por Hora',
          },
          legend: {
            display: true,
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Hora',
            },
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Lotação (%)',
            },
          },
        },
      },
    };

    this.chartInstance = new Chart(canvas!, config);
  }
}
