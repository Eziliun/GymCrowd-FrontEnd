import {Component} from '@angular/core';
import {DialogModule} from "primeng/dialog";
import {Button} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {NgOptimizedImage} from "@angular/common";
import {PasswordModule} from "primeng/password";
import {RouterLink} from "@angular/router";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { RegisterDialogComponent } from '../register-dialog/register-dialog.component';

@Component({
  selector: 'app-login-dialog',
  standalone: true,
  imports: [
    DialogModule,
    Button,
    InputTextModule,
    NgOptimizedImage,
    PasswordModule,
    RouterLink
  ],
  templateUrl: './login-dialog.component.html',
  styleUrl: './login-dialog.component.scss'
})
export class LoginDialogComponent {
  forgotPasswordDialogRef: DynamicDialogRef | undefined;
  signUpDialogRef: DynamicDialogRef | undefined;

  constructor(private dialogService: DialogService) {
  }

  goToForgotPassword() {
    this.forgotPasswordDialogRef = this.dialogService.open(ForgotPasswordComponent, {
      modal: true, position: "top",
      draggable: false, resizable: false,
      closable: false, showHeader: false,
      closeOnEscape: true, dismissableMask: true,
      contentStyle: {
        'padding': '2rem 3.5rem',
        'border-radius': '1rem'
      },
      style: {
        'width': 'calc(100% - 2rem)',
        'max-width': '34.9375rem',
        'max-height': '26.8125rem',
        'margin-top': '1rem',
      }
    })
  }

  goToSignup() {
    this.signUpDialogRef = this.dialogService.open(RegisterDialogComponent, {
      modal: true, position: "top",
      draggable: false, resizable: false,
      closable: false, showHeader: false,
      closeOnEscape: true, dismissableMask: true,
      contentStyle: {
        'padding': '2rem 3.5rem',
        'border-radius': '1rem',
        'overflow': 'hidden',
      },
      style: {
        'width': 'calc(100% - 2rem)',
        'max-width': '34.975rem',
        'max-height': '58.875rem',
        'margin-top': '1rem',
      }
    })
  }
}
