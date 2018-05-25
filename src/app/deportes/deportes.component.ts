import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Deporte } from './deporte';
import { Reserva} from './reserva';
import { Escenario } from './escenario';
import { DeportesService } from '../services/deportes.service'


@Component({
  selector: 'app-deportes',
  templateUrl: './deportes.component.html',
  styleUrls: ['./deportes.component.scss']
})
export class DeportesComponent implements OnInit {

  public param: string;
  public nombreDeporte: string;
  public deporte: Deporte;
  public lstDeportes: Deporte[];
  public lista_dias: Array<Date>;
  public lista_horarios:Array<string>;
  public fecha_hoy: Date;
  public dia_seleccionado:Date;
  public lista_escenarios:Array<string>;
  public lista_escenarios_Firebase:Escenario[];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private db: AngularFireDatabase,
    private deporteService: DeportesService
  ) {
    //this.nombreDeporte = "";
    this.deporte = new Deporte();
    this.inicializarListaDias();
    this.inicializarHorarios();
    this.inicializarListaEscenarios();
    this.dia_seleccionado = this.lista_dias[0];
    console.log(this.dia_seleccionado);
  }

  ngOnInit() {
    this._route.params.forEach((params: Params) => {
       this.param = params['ident'];
    });
    this.deporteService.getDeportes()
      .snapshotChanges()
      .subscribe(item =>{
        this.lstDeportes = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.lstDeportes.push(x as Deporte);
        });
      });
      this.deporteService.getEscenarios()
      .snapshotChanges()
      .subscribe(item =>{
        this.lista_escenarios_Firebase = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.lista_escenarios_Firebase.push(x as Escenario);
        });
      });
  }

  inicializarListaDias(){
    this.lista_dias = [];  
    this.fecha_hoy = new Date();
    this.lista_dias[0]= new Date(this.fecha_hoy);
    this.lista_dias[1]= new Date(this.fecha_hoy.setDate(this.fecha_hoy.getDate()+1));
    this.lista_dias[2]= new Date(this.fecha_hoy.setDate(this.fecha_hoy.getDate()+1));
    this.lista_dias[3]= new Date(this.fecha_hoy.setDate(this.fecha_hoy.getDate()+1));
    this.lista_dias[4]= new Date(this.fecha_hoy.setDate(this.fecha_hoy.getDate()+1));
    this.lista_dias[5]= new Date(this.fecha_hoy.setDate(this.fecha_hoy.getDate()+1));
    this.lista_dias[6]= new Date(this.fecha_hoy.setDate(this.fecha_hoy.getDate()+1));
  }

  inicializarHorarios(){
    this.lista_horarios = ["7","8","9","10","11","12","13","14","15","16","17","18"];
  }

  inicializarListaEscenarios(){
    this.lista_escenarios = ["CanchaFundadores","CanchaBloque19","Polideportivo","CanchaTenis","PlacasDeportivas"];
  }

  agregarDeporte(){
    let x = new Deporte();
    x.$key = this.nombreDeporte;
    x.horarios = [];
    this.deporteService.insertDeporte(x);
  }

  onChangeDia(dia_index) {
    this.dia_seleccionado = this.lista_dias[dia_index];
  }

  reservarHorario(index_horario){
    console.log(this.lstDeportes);
    console.log(this.lista_escenarios_Firebase);
    let fecha_reserva = new Date(this.dia_seleccionado);
    fecha_reserva.setHours(parseInt(this.lista_horarios[index_horario]));
    fecha_reserva.setMinutes(0);
    fecha_reserva.setSeconds(0);
    console.log(fecha_reserva);

    let reserva = new Reserva();
    reserva.idEscenario = "1";
    reserva.fechaReserva = fecha_reserva;
    console.log(reserva.fechaReserva);
    this.deporteService.insertReserva(reserva);
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