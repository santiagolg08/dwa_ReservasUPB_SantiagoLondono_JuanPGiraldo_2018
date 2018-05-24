import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Deporte } from '../deportes/deporte';

@Injectable()
export class DeportesService {

  deportesList: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }

  getDerportes(){
    return this.deportesList = this.firebase.list('Deportes');
  }

  insertDeporte(deporte: Deporte){
    this.deportesList.push({
      key: deporte.$key,
      Horarios: deporte.horarios
    })
  }

}
