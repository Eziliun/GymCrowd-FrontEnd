import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogRef, DialogService } from 'primeng/dynamicdialog';
import { GymEditDialogComponent } from '../gym-edit-dialog/gym-edit-dialog.component';

@Component({
  selector: 'app-gym-infos',
  standalone: true,
  imports: [InputTextModule, ButtonModule],
  providers: [DialogService],
  templateUrl: './gym-infos.component.html',
  styleUrl: './gym-infos.component.scss'
})
export class GymInfosComponent {
  dialogRef: DynamicDialogRef | undefined;

  constructor(private dialogService: DialogService) {}

  openEditDialog() {
    this.dialogRef = this.dialogService.open(GymEditDialogComponent, {
      modal: true,
      width: 'auto',
      contentStyle: {'max-height': '500px', 'overflow': 'auto'},
      style: {'max-width': '600px'}
    });
  }
}
