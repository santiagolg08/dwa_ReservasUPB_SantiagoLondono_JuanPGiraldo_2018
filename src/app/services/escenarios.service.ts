import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Escenarios } from '../escenarios/escenarios'
import { Observable } from '@firebase/util';
import { query } from '@angular/animations';

@Injectable()
export class EscenariosService {

  escenariosList : AngularFireList<Escenarios> = null;
  lstEscenarios : Escenarios[] = [];
  listEscenarios: any;

  constructor(private firebase: AngularFireDatabase) { 
    this.escenariosList = this.firebase.list('Escenarios');
  }

   get listaEscenarios(): Escenarios[]{
     return this.lstEscenarios;
   }

   getListaEscenarios() {
    return this.escenariosList;
   }

   obtenerEscenarios(){
    return this.listEscenarios = this.firebase.list('Escenarios').valueChanges();
   }
}
