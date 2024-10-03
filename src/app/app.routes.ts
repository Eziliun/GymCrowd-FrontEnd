import { Routes } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
<<<<<<< HEAD
import { GymPageComponent } from './Pages/gym-page/gym-page.component';

export const routes: Routes = [
    {path: 'home', component: HomePageComponent, pathMatch: 'full'},
    {path:'academia', component: GymPageComponent, pathMatch: 'full'},
=======

export const routes: Routes = [
    {path: 'home', component: HomePageComponent, pathMatch: 'full'},
>>>>>>> 3b155ec4b0422afc3b225604d56f7e23c801bc05
    {path: '**', redirectTo: 'home', pathMatch: 'full'}
];
