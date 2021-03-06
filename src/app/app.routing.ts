import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { AuthComponent } from './auth/auth.component';
import { HeaderComponent} from './header/header.component';
import { EscenariosComponent} from './escenarios/escenarios.component';
import { DeportesComponent} from './deportes/deportes.component';
import { ReservasComponent } from './reservas/reservas.component';
import { ContactoComponent} from './contacto/contacto.component';


const appRoutes: Routes = [
    { path: '', component:InicioComponent },
    { path: 'inicio', component:InicioComponent },
    { path: 'auth', component:AuthComponent },
    { path: 'header', component:HeaderComponent},
    { path: 'escenarios',component:EscenariosComponent},
    { path: 'reservas',component:ReservasComponent},
    { path: 'deportes/:ident', component:DeportesComponent},
    { path: 'contacto',component:ContactoComponent}
       
];

export const appRoutingProviders: any = [];
export const routing: ModuleWithProviders = RouterModule.forRoot (appRoutes);
