import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Deporte } from '../deportes/deporte';
import {Reserva} from '../deportes/reserva';

@Injectable()
export class DeportesService {

  deportesList: AngularFireList<any>;
  reservasList: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { 
    this.deportesList = this.firebase.list('Deportes');
    this.reservasList = this.firebase.list('Reservas');
  }

  getDeportes(){
    return this.deportesList = this.firebase.list('Deportes');
  }

  getReservas(){
    return this.reservasList = this.firebase.list('Reservas');
  }

  insertDeporte(deporte: Deporte){
    this.deportesList.push({
      key: deporte.$key,
      Horarios: deporte.horarios
    })
  }

  insertReserva(reserva: Reserva){
    console.log(reserva.fechaReserva);
    this.reservasList.push({
      idEscenario: reserva.idEscenario,
      fechaReserva: reserva.fechaReserva.toString(),
    })
  }

}
