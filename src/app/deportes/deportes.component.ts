import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Deporte } from './deporte';
import { Reserva} from './reserva';
import { Escenario } from './escenario';
import { DeportesService } from '../services/deportes.service';
import { AuthService } from '../services/auth.service';


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
  public lista_escenarios_Firebase:Escenario[];
  public lista_reservas: Reserva[];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private db: AngularFireDatabase,
    private deporteService: DeportesService,
    private authService:AuthService
  ) {
    this.deporte = new Deporte();
    this.inicializarListaDias();
    this.dia_seleccionado = this.lista_dias[0];
    this.inicializarHorarios();
    
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
    this.cargarHorariosDisponibles();
  }

  cargarHorariosDisponibles(){
    this. lista_reservas = this.cargarReservas();
    let lista_h_disponible = [];
    console.log(this.lista_reservas);
    console.log(this.dia_seleccionado);
    let day_s = this.dia_seleccionado.getDay();
    console.log(day_s);
    console.log(this.lista_reservas);
    for(var i in this.lista_reservas){

      //Aqui necesito acceder al lista_reservas ....
    }
    // for(var i=0;i<lista_reservas.length;i++){
    //   console.log("entre");
    //   console.log(lista_reservas[i].fechaReserva.getDate());
    //   if((lista_reservas[i].fechaReserva.getDay()) == day_s){
    //     console.log(lista_reservas[i].fechaReserva.getHours().toString());
    //     let pos = this.lista_horarios.indexOf(lista_reservas[i].fechaReserva.getHours().toString());
    //   }
    // }

  }

  cargarReservas(){
    let lst_reservas = [];
    this.deporteService.getReservas().snapshotChanges().subscribe(item =>{
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        lst_reservas.push(x as Reserva);
      });
    });
    return lst_reservas;
  }

  agregarDeporte(){
    let x = new Deporte();
    x.$key = this.nombreDeporte;
    x.horarios = [];
    this.deporteService.insertDeporte(x);
  }

  onChangeDia(dia_index) {
    this.dia_seleccionado = this.lista_dias[dia_index];
    this.cargarHorariosDisponibles();
  }

  reservarHorario(index_horario){
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
}

obtenerIdEscenario(){
  if(this.lista_escenarios_Firebase != null){
    for (let i=0; i<this.lista_escenarios_Firebase.length;i++){
      if(this.lista_escenarios_Firebase[i].$key == this.param){
        return this.lista_escenarios_Firebase[i].id;
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