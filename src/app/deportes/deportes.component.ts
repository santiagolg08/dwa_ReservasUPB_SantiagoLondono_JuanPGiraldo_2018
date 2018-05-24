import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-deportes',
  templateUrl: './deportes.component.html',
  styleUrls: ['./deportes.component.scss']
})
export class DeportesComponent implements OnInit {

  public param: string;
  public deporte: Deporte;
  public lstDeportes: Deporte[] = [];
  public lista_dias:Array<Date>;
  public fecha_hoy:Date;
  public lista_horarios:Array<string>;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private db: AngularFireDatabase
  ) { 
    this.inicializarListaDias();
    this.inicializarHorarios();

    
  }

  ngOnInit() {
    this._route.params.forEach((params: Params) => {
      this.param = params['ident'];
      this.cargarDeportes();
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

  cargarDeportes(){
    this.lstDeportes = [];
    var deportes = this.db.list("Deportes");
    deportes.snapshotChanges().subscribe(item => {
      item.forEach(deporte => {
        var x = deporte.payload.toJSON();
        x["key"] = deporte.key;
        this.lstDeportes.push(x as Deporte);
      });
      this.buscarDeporte();
      this.cargarHorario();
    });
  }

  buscarDeporte(){
    for (let i = 0; i < this.lstDeportes.length; i++) {
      if(this.lstDeportes[i].key == this.param){
        this.deporte = this.lstDeportes[i];
      }
    }
  }
  cargarHorario() {
    
  }

}

interface Deporte {
  horarios: string[];
  key: string;
}
