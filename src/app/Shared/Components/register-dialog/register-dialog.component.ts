import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Button } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RegisterService } from '../../Service/register.service';
import { ToastService } from '../../Service/Toast.service';

@Component({
  selector: 'app-register-dialog',
  standalone: true,
  imports: [
    Button,
    InputTextModule,
    PasswordModule,
    RouterLink,
    DialogModule,
    NgOptimizedImage,
    InputMaskModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.scss'] 
})
export class RegisterDialogComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: DynamicDialogRef,
    private registerService: RegisterService,
    private toastService: ToastService,
  ) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cnpj: ['', Validators.required],
      phone: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  closeDialog() {
    this.dialogRef.close();
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const payload = this.registerForm.value;
      this.registerService.register(payload).subscribe({
        next: (response: any) => {
          this.toastService.showSuccess('Operação realizada com sucesso!');
          console.log('Registration successful', response);
          this.closeDialog();
        },
        error: (error: any) => {
          this.toastService.showError('Erro ao registrar o usuário');
          console.error('Registration failed', error);
        }
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
