import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';

import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { GymEditComponentComponent } from '../../../../gym-edit.component/gym-edit.component.component';
@Component({
  selector: 'app-gym-infos',
  standalone: true,
  imports: [InputTextModule],
  providers: [DialogService],
  templateUrl: './gym-infos.component.html',
  styleUrl: './gym-infos.component.scss'
})
export class GymInfosComponent {
  ref: DynamicDialogRef | undefined;

  constructor(public dialogService: DialogService) {}

  show() {
    this.ref = this.dialogService.open(GymEditComponentComponent, {
        header: 'Select a Product',
        width: '50vw',
        modal:true,
        breakpoints: {
            '960px': '75vw',
            '640px': '90vw'
        },
    });
  }
}
