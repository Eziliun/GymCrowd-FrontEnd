import {Component} from '@angular/core';
import {DialogModule} from "primeng/dialog";
import {Button} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {PasswordModule} from "primeng/password";
import {Router, RouterLink} from "@angular/router";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { RegisterDialogComponent } from '../register-dialog/register-dialog.component';
import { InputMaskModule } from 'primeng/inputmask';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../Services/Login.service';

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
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './login-dialog.component.html',
  styleUrl: './login-dialog.component.scss'
})
export class LoginDialogComponent {
  loginForm: FormGroup;
  forgotPasswordDialogRef: DynamicDialogRef | undefined;
  signUpDialogRef: DynamicDialogRef | undefined;

  constructor(
    private fb: FormBuilder,
    private dialogService: DialogService,
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      cnpj: ['', [Validators.required, Validators.pattern(/\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}/)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    // if (this.loginForm.valid) {
    //   const loginData = this.loginForm.value;
    //   this.loginService.login(loginData).subscribe(
    //     (response: any) => {
    //       console.log('Login bem-sucedido:', response);
    //       this.router.navigate(['/home']);
    //     },
    //     (error: any) => {
    //       console.error('Erro no login:', error);
    //     }
    //   );
    // } else {
    //   console.log('Formulário inválido');
    // }

    console.log(this.loginForm.value);
    
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

