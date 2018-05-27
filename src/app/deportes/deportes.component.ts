import { Component, OnInit, OnChanges, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Deporte } from './deporte';
import { Reserva } from './reserva';
import { Escenario } from './escenario';
import { DeportesService } from '../services/deportes.service';
import { AuthService } from '../services/auth.service';
import { EscenariosService } from '../services/escenarios.service';
import { Escenarios } from '../escenarios/escenarios';

@Component({
  selector: 'app-deportes',
  templateUrl: './deportes.component.html',
  styleUrls: ['./deportes.component.scss']
})
export class DeportesComponent implements OnInit {

  public param: string;
  // public nombreDeporte: string;
  // public deporte: Deporte;
  public lista_dias: Array<Date>;
  public lista_horarios: Array<string>;
  public fecha_hoy: Date;
  public dia_seleccionado: Date;
  public lstDeportes: Deporte[] = [];
  public lstEscenarios: Escenarios[] = [];
  public lst_reservas: Reserva[] = [];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private db: AngularFireDatabase,
    private deporteService: DeportesService,
    private escenarioService: EscenariosService,
    private authService: AuthService
  ) {
    // this.deporte = new Deporte();
    this.inicializarListaDias();
    this.dia_seleccionado = this.lista_dias[0];
    // this.inicializarHorarios();
  }

  ngOnInit() {
    this._route.params.forEach((params: Params) => {
      this.param = params['ident'];
      this.obtenerDatos();
      this.obtenerIdEscenario();
      this.inicializarHorarios();
    });
  }

  obtenerDatos() {
    this.deporteService.getDeportes()
      .snapshotChanges()
      .subscribe(item => {
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.lstDeportes.push(x as Deporte);
        });
      });
    this.escenarioService.getListaEscenarios().snapshotChanges()
      .subscribe(item => {
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.lstEscenarios.push(x as Escenarios);
        });
      });
    this.deporteService.getReservas().snapshotChanges().subscribe(item => {
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.lst_reservas.push(x as Reserva);
      });
    });
  }

  // obtenerEscenarios(){
  //   this.escenarioService.getListaEscenarios().snapshotChanges().map( changes =>{
  //     return changes.map( c => ({ key:c.payload.key, id: c.payload.val()}));
  //   }).subscribe( item => {
  //     this.lstEscenarios = item;
  //   });
  // }

  inicializarListaDias() {
    this.lista_dias = [];
    this.fecha_hoy = new Date();
    this.lista_dias[0] = new Date(this.fecha_hoy);
    this.lista_dias[1] = new Date(this.fecha_hoy.setDate(this.fecha_hoy.getDate() + 1));
    this.lista_dias[2] = new Date(this.fecha_hoy.setDate(this.fecha_hoy.getDate() + 1));
    this.lista_dias[3] = new Date(this.fecha_hoy.setDate(this.fecha_hoy.getDate() + 1));
    this.lista_dias[4] = new Date(this.fecha_hoy.setDate(this.fecha_hoy.getDate() + 1));
    this.lista_dias[5] = new Date(this.fecha_hoy.setDate(this.fecha_hoy.getDate() + 1));
    this.lista_dias[6] = new Date(this.fecha_hoy.setDate(this.fecha_hoy.getDate() + 1));
  }

  inicializarHorarios() {
    // this.lista_horarios = ["7","8","9","10","11","12","13","14","15","16","17","18"];
    this.cargarHorariosDisponibles();
  }


  cargarHorariosDisponibles() {
    let lista_h_disponible = ["7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"];
    let day_s = this.dia_seleccionado.getDay();
    setTimeout(() => {
      let id_escenario = this.obtenerIdEscenario();
      console.log(this.lst_reservas);
      this.lst_reservas.forEach(item => {
        console.log(item.fechaReserva);
        if (item.idEscenario == id_escenario) {
          let fecha = new Date(item.fechaReserva);
          console.log(fecha);
          console.log(fecha.getHours());
          if (fecha.getDay() == day_s) {
            console.log("coinciden");
            let pos = lista_h_disponible.indexOf(fecha.getHours().toString())
            lista_h_disponible.splice(pos, 1);
            console.log(lista_h_disponible);
          }
        }
      });
      this.lista_horarios = lista_h_disponible;
    }, 1000);
  }

  // agregarDeporte(){
  //   let x = new Deporte();
  //   x.$key = this.nombreDeporte;
  //   x.horarios = [];
  //   this.deporteService.insertDeporte(x);
  // }

  onChangeDia(dia_index) {
    this.dia_seleccionado = this.lista_dias[dia_index];
    this.cargarHorariosDisponibles();
  }

  reservarHorario(index_horario) {
    let userid = this.authService.currentUserId;

    let id_escenario = this.obtenerIdEscenario();

    let fecha_reserva = new Date(this.dia_seleccionado);
    fecha_reserva.setHours(parseInt(this.lista_horarios[index_horario]));
    fecha_reserva.setMinutes(0);
    fecha_reserva.setSeconds(0);

    let reserva = new Reserva();
    reserva.idEscenario = id_escenario;
    reserva.fechaReserva = fecha_reserva;
    reserva.userId = userid;
    this.deporteService.insertReserva(reserva);
    this.irAInicio();
    // this.obtenerDatos();
    // this.obtenerIdEscenario();
    // this.inicializarHorarios();
  }

  irAInicio() {
    this._router.navigate(['/inicio']);
  }

  cargarReservas() {
    this.lst_reservas = [];
    this.deporteService.getReservas().snapshotChanges().subscribe(item => {
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.lst_reservas.push(x as Reserva);
      });
    });
  }

  obtenerIdEscenario() {
    if (this.lstEscenarios != null) {
      for (let i = 0; i < this.lstEscenarios.length; i++) {
        if (this.lstEscenarios[i].$key == this.param) {
          return this.lstEscenarios[i].id;
        }
      }
    }
  }


  // cargarDeportes() {
  //   this.lstDeportes = [];
  //   var deportes = this.db.list("Deportes");
  //   deportes.snapshotChanges().subscribe(item => {
  //     item.forEach(deporte => {
  //       var x = deporte.payload.toJSON();
  //       x["key"] = deporte.key;
  //       this.lstDeportes.push(x as deporte);
  //     });
  //     //this.buscarDeporte();
  //     this.cargarHorario();
  //   });
  // }

  // buscarDeporte() {
  //   for (let i = 0; i < this.lstDeportes.length; i++) {
  //     if (this.lstDeportes[i].key == this.param) {
  //       this.deporte.horarios = this.lstDeportes[i].horarios;
  //       this.deporte.key = this.lstDeportes[i].key;
  //       console.log(this.deporte);
  //     }
  //   }
  // }

}