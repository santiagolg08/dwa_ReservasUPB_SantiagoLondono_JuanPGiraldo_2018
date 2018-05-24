import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Deporte } from './deporte';
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
  }

  ngOnInit() {
    this._route.params.forEach((params: Params) => {
       this.param = params['ident'];
    });
    this.deporteService.getDerportes()
      .snapshotChanges()
      .subscribe(item =>{
        this.lstDeportes = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.lstDeportes.push(x as Deporte);
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
    console.log(this.lista_dias);
  }

  inicializarHorarios(){
    this.lista_horarios = ["7","8","9","10","11","12","13","14","15","16","17","18"];
  }

  cargarHorario() {

  }

  agregarDeporte(){
    let x = new Deporte();
    x.$key = this.nombreDeporte;
    x.horarios = [];
    this.deporteService.insertDeporte(x);
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