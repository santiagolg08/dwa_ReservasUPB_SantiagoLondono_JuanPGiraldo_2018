import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthComponent } from './auth/auth.component';
import { InicioComponent } from './inicio/inicio.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EscenariosComponent } from './escenarios/escenarios.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
    InicioComponent,
    EscenariosComponent,
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
