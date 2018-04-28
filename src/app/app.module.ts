import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthComponent } from './auth/auth.component';
import { InicioComponent } from './inicio/inicio.component';
import { EscenariosComponent} from './escenarios/escenarios.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
    InicioComponent,
    EscenariosComponent,
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    FormsModule,
    routing,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAqOFBg8PQg9YzRh2QaNXur-pF5BDvgfM0'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
