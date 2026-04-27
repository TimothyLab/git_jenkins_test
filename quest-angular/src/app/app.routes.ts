import { Routes } from '@angular/router';
import { Home } from './page/home/home';
import { Matieres } from './page/matieres/matieres';
import { Login } from './page/login/login';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'matieres', component: Matieres},
    {path: 'login', component: Login}
];
