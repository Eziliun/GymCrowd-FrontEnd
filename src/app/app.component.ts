import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
import { ToastService } from './Shared/Service/Toast.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { HeaderComponent } from './Shared/Components/header/header.component';
=======
>>>>>>> 3b155ec4b0422afc3b225604d56f7e23c801bc05

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet, ToastModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [MessageService, ToastService] 
=======
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
>>>>>>> 3b155ec4b0422afc3b225604d56f7e23c801bc05
})
export class AppComponent {
}
