import { Routes } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { GymPageComponent } from './Pages/gym-page/gym-page.component';
import { AuthGuard } from './Shared/Service/auth.guard';

export const routes: Routes = [
    {path: 'home', component: HomePageComponent, pathMatch: 'full'},
    { path: 'academia', component: GymPageComponent, canActivate: [AuthGuard], pathMatch: 'full' },
    {path: '**', redirectTo: 'home', pathMatch: 'full'}
];