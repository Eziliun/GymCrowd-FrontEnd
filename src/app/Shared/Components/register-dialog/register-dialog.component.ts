import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-register-dialog',
  standalone: true,
  imports: [
    Button,
    InputTextModule,
    PasswordModule,
    RouterLink,
    DialogModule,
    NgOptimizedImage
  ],
  templateUrl: './register-dialog.component.html',
  styleUrl: './register-dialog.component.scss'
})
export class RegisterDialogComponent {
  constructor(private dialogRef: DynamicDialogRef) {}

  closeDialog() {
    this.dialogRef.close()
  }
}
