import { NgClass, NgIf, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {ButtonModule} from 'primeng/button';
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass, NgIf, NgOptimizedImage, ButtonModule],
  providers: [DialogService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  isMenuActive: boolean = false;
  innerWidth: number = window.innerWidth;
  loginDialogRef: DynamicDialogRef | undefined

  constructor(private dialogService: DialogService) {}

  ngOnInit() {
    window.addEventListener('resize',() => {
      this.innerWidth = window.innerWidth
    });
  }

  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
  }

  openLoginDialog() {
    this.loginDialogRef = this.dialogService.open(LoginDialogComponent, {
      modal: true, position: 'top',
      draggable: false, resizable: false,
      closable: false, showHeader: false,
      closeOnEscape: true, dismissableMask: true,
      style: {
        'width': 'calc(100% - 6rem)',
        'max-width': '50rem',
        'max-height': '41rem',
        'height': '95%',
        'margin-top': '1rem',
      },
      contentStyle: {'padding': '2rem 4rem'},
    });
  }
}
