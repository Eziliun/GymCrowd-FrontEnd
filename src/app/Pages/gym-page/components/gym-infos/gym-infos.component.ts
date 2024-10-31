import { Component, Input, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogRef, DialogService } from 'primeng/dynamicdialog';
import { GymEditDialogComponent } from '../gym-edit-dialog/gym-edit-dialog.component';
import { Router } from '@angular/router';
import { LoginService } from '../../../../Shared/Service/Login.service';

@Component({
  selector: 'app-gym-infos',
  standalone: true,
  imports: [InputTextModule, ButtonModule],
  providers: [DialogService],
  templateUrl: './gym-infos.component.html',
  styleUrl: './gym-infos.component.scss'
})
export class GymInfosComponent implements OnInit {
  @Input() academiaData: any;
  dialogRef: DynamicDialogRef | undefined;

  constructor(
    private dialogService: DialogService,
    private loginService: LoginService,  
    private router: Router  
  ) {}

  ngOnInit() {
    const storedData = localStorage.getItem('academiaData');
    this.academiaData = storedData ? JSON.parse(storedData) : null;
  }

  openEditDialog() {
    this.dialogRef = this.dialogService.open(GymEditDialogComponent, {
      modal: true,
      width: 'auto',
      contentStyle: {'max-height': '500px', 'overflow': 'auto'},
      style: {'max-width': '600px'}
    });
  }

  logout() {
    this.loginService.logout();
    localStorage.removeItem('academiaData');
    window.location.href = '/home';
  }
}
