import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    Button,
    InputTextModule,
    PasswordModule,
    RouterLink,
    DialogModule
  ],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  constructor(private dialogRef: DynamicDialogRef) {}

  closeDialog() {
    this.dialogRef.close()
  }
}
