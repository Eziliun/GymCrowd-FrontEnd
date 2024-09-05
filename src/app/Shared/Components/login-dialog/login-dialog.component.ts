import {Component} from '@angular/core';
import {DialogModule} from "primeng/dialog";
import {Button} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {NgOptimizedImage} from "@angular/common";
import {PasswordModule} from "primeng/password";
import {RouterLink} from "@angular/router";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {ForgotPasswordComponent} from '../forgot-password/forgot-password.component';
import {RegisterDialogComponent} from '../register-dialog/register-dialog.component';
import {InputMaskModule} from 'primeng/inputmask';
import {ReactiveFormsModule, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LoginPayload } from '../../Interface/request/ILogin';
import { LoginService } from '../../Service/Login.service';

@Component({
  selector: 'app-login-dialog',
  standalone: true,
  imports: [
    DialogModule,
    Button,
    InputTextModule,
    NgOptimizedImage,
    PasswordModule,
    RouterLink,
    InputMaskModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent {
  forgotPasswordDialogRef: DynamicDialogRef | undefined;
  signUpDialogRef: DynamicDialogRef | undefined;
  
  loginForm: FormGroup;

  constructor(private dialogService: DialogService, private fb: FormBuilder, private loginService: LoginService) {
    this.loginForm = this.fb.group({
      cnpj: ['', [Validators.required, Validators.pattern(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // Função para submeter o formulário
  onSubmit() {
    if (this.loginForm.valid) {
      const loginData: LoginPayload = this.loginForm.value;
      this.loginService.login(loginData).subscribe({
        next: (response:any) => {
          console.log('Login com sucesso', response);
        },
        error: (err:any) => {
          console.error('Erro no login', err);
        }
      });
    } else {
      console.log('Formulário inválido');
    }
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
    });
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
    });
  }
}
