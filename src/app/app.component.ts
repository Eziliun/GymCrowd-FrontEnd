import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastService } from './Shared/Service/Toast.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { HeaderComponent } from './Shared/Components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToastModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [MessageService, ToastService] 
})
export class AppComponent {
}
