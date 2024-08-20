import { Routes } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';

export const routes: Routes = [
    {path: 'home', component: HomePageComponent, pathMatch: 'full'},
    {path: '**', redirectTo: 'home', pathMatch: 'full'}
];
