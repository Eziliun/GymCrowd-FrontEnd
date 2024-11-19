import { NgClass, NgIf, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import {ButtonModule} from 'primeng/button';
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { AuthService } from '../../Service/auth-service.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass, NgOptimizedImage, ButtonModule],
  providers: [DialogService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  isMenuActive: boolean = false;
  innerWidth: number = window.innerWidth;
  loginDialogRef: DynamicDialogRef | undefined;
  isAuthenticated: boolean = false;

  constructor(
    private dialogService: DialogService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    window.addEventListener('resize', () => {
      this.innerWidth = window.innerWidth;
    });

    this.authService.isAuthenticated$.subscribe(isAuth => {
      this.isAuthenticated = isAuth;
    });
  }

  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
  }

  goToProfile(): void {
    this.router.navigate(['/academia']);
  }

  openLoginDialog() {
    this.loginDialogRef = this.dialogService.open(LoginDialogComponent, {
      modal: true,
      position: 'top',
      draggable: false,
      resizable: false,
      closable: true,
      showHeader: false,
      closeOnEscape: true,
      dismissableMask: true,
      style: {
        'width': 'calc(100% - 6rem)',
        'max-width': '50rem',
        'max-height': '41rem',
        'height': '95%',
        'margin-top': '1rem',
      },
      contentStyle: {'padding': '1rem 4rem'},
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/]');  
  }
}
