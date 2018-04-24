import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { AuthComponent } from './auth/auth.component';


const appRoutes: Routes = [
    { path:'', component:InicioComponent },
    { path:'inicio', component:InicioComponent },
    { path:'auth', component:AuthComponent },
       
];

export const appRoutingProviders: any = [];
export const routing: ModuleWithProviders = RouterModule.forRoot (appRoutes);
