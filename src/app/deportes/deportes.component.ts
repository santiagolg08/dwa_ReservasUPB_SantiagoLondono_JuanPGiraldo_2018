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

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private db: AngularFireDatabase
  ) { }

  ngOnInit() {
    this._route.params.forEach((params: Params) => {
      this.param = params['ident'];
      this.cargarDeportes();
    });

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
