import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Escenarios } from '../escenarios/escenarios'
import { Observable } from '@firebase/util';
import { query } from '@angular/animations';

@Injectable()
export class EscenariosService {

  escenariosList: AngularFireList<Escenarios> = null;
  lstEscenarios: Escenarios[] = [];
  listEscenarios: any;
  public lista_src_escenarios = [
    [
      "../../assets/img/fotos_escenarios/escenario_fundadores_1.JPG",
      "../../assets/img/fotos_escenarios/escenario_fundadores_2.JPG",
      "../../assets/img/fotos_escenarios/escenario_fundadores_3.JPG",
      "../../assets/img/fotos_escenarios/escenario_fundadores_4.JPG",
    ],
    [
      "../../assets/img/fotos_escenarios/escenario_cancha_bloque19_1.JPG",
      "../../assets/img/fotos_escenarios/escenario_cancha_bloque19_2.JPG",
      "../../assets/img/fotos_escenarios/escenario_cancha_bloque19_3.JPG",
      "../../assets/img/fotos_escenarios/escenario_cancha_bloque19_4.JPG",
    ],
    [
      "../../assets/img/fotos_escenarios/escenario_polideportivo_1.JPG",
      "../../assets/img/fotos_escenarios/escenario_polideportivo_2.JPG",
      "../../assets/img/fotos_escenarios/escenario_polideportivo_3.JPG",
      "../../assets/img/fotos_escenarios/escenario_polideportivo_4.JPG",
    ],
    [
      "../../assets/img/fotos_escenarios/escenario_tenis_1.JPG",
      "../../assets/img/fotos_escenarios/escenario_tenis_2.JPG",
      "../../assets/img/fotos_escenarios/escenario_tenis_3.JPG",
      "../../assets/img/fotos_escenarios/escenario_tenis_4.JPG",
    ],
    [
      "../../assets/img/fotos_escenarios/escenario_placas_1.JPG",
      "../../assets/img/fotos_escenarios/escenario_placas_2.JPG",
      "../../assets/img/fotos_escenarios/escenario_placas_3.JPG",
      "../../assets/img/fotos_escenarios/escenario_placas_4.JPG",

    ],
  ]

  constructor(private firebase: AngularFireDatabase) {
    this.escenariosList = this.firebase.list('Escenarios');
  }

  get listaEscenarios(): Escenarios[] {
    return this.lstEscenarios;
  }

  getListaEscenarios() {
    return this.escenariosList;
  }

  obtenerEscenarios() {
    return this.listEscenarios = this.firebase.list('Escenarios').valueChanges();
  }

  prueba(nombre_prenda: string) {
    return nombre_prenda;
  }

  getEscenarios(index) {
    return this.lista_src_escenarios[index];
  }

}
