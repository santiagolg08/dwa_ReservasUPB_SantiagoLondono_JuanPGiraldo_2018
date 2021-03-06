﻿import {environment} from '../environments/environment';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routing, appRoutingProviders } from './app.routing';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthComponent } from './auth/auth.component';
import { InicioComponent } from './inicio/inicio.component';
import { EscenariosComponent} from './escenarios/escenarios.component';

import { AngularFireModule } from 'angularfire2';
// for AngularFireDatabase
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';
// for AngularFireAuth
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';

import {AuthService} from './services/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AgmCoreModule } from '@agm/core';
import { DeportesComponent } from './deportes/deportes.component'
import { DeportesService } from './services/deportes.service';
import { EscenariosService } from './services/escenarios.service';

import { ReservasComponent } from './reservas/reservas.component';
import { ContactoComponent } from './contacto/contacto.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
    InicioComponent,
    EscenariosComponent,
    DeportesComponent,
    ReservasComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : [],
    RouterModule.forRoot(
      [
        { path: "", component: AuthComponent}
      ]
    ),
    
    routing,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAqOFBg8PQg9YzRh2QaNXur-pF5BDvgfM0'
    })
  ],
  providers: [AuthService,DeportesService,EscenariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
