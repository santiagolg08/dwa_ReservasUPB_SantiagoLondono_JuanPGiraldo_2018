import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public deportes: Deporte[] = [];

  constructor( 
    private _route: ActivatedRoute,
    private _router: Router,
    private db: AngularFireDatabase
  ){}

  ngOnInit() {
    var lstDeportes = this.db.list("Deportes");
    lstDeportes.snapshotChanges().subscribe(item => {
      item.forEach(deporte =>{
        var x = deporte.payload.toJSON();
        x["key"] = deporte.key;
        this.deportes.push(x as Deporte);
      });
    });
  }


  public subMenuDeportes() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  irAInicio() {
    this._router.navigate(['/inicio']);
  }
  
  irAEscenarios() {
    this._router.navigate(['/escenarios']);
  }

  irADeportes(key){
    this._router.navigate(["/deportes/"+key]);
    this.subMenuDeportes();
  }
}

interface Deporte{
  Horario: string[]
}