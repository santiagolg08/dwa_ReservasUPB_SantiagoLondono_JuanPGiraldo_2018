import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AuthService } from '../services/auth.service';
import { Escenarios } from '../escenarios/escenarios';
import { element } from 'angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: {
    '(document:click)': 'functionClick($event)'
  }
})
export class HeaderComponent implements OnInit {

  public escenarios: Escenarios[] = [];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private db: AngularFireDatabase,
    public authService: AuthService
  ) { }

  ngOnInit() {
    var lstEscenarios = this.db.list("Escenarios");
    lstEscenarios.snapshotChanges().subscribe(item => {
      item.forEach(escenario => {
        var x = escenario.payload.toJSON();
        x["$key"] = escenario.key;
        this.escenarios.push(x as Escenarios);
      });
    });
  }

  functionClick(event) {
    if (event.target.id == "btsec_login_menu") {
      document.getElementById("myDropdown").classList.remove("showReservas");
    } else if (event.target.id == "btsec_deportes") {
      document.getElementById("profileMenu").classList.remove("showPerfil");
    } else if (event.target.id == "btnMenu") {
      document.getElementById("myDropdown").classList.remove("showReservas");
      document.getElementById("profileMenu").classList.remove("showPerfil");
    } else {
      document.getElementById("myDropdown").classList.remove("showReservas");
      document.getElementById("profileMenu").classList.remove("showPerfil");
      document.getElementById("menu").classList.remove("display");
    }
  }


  public subMenuDeportes() {
    document.getElementById("myDropdown").classList.toggle("showReservas");
  }

  public subMenuPerfil() {
    document.getElementById("profileMenu").classList.toggle("showPerfil");
  }

  irAInicio() {
    this._router.navigate(['/inicio']);
  }

  irAEscenarios() {
    this._router.navigate(['/escenarios']);
  }

  irAContacto() {
    this._router.navigate(['/contacto']);
  }

  irADeportes(key) {
    this._router.navigate(["/deportes/" + key]);
    this.subMenuDeportes();
  }

  login() {
    this._router.navigate(["auth"]);
    this.subMenuPerfil();
  }

  misReservas() {
    this._router.navigate(["reservas"]);
    this.subMenuPerfil();
  }

  cerrarSesion() {
    this.authService.signOut();
    this._router.navigate(["auth"]);
    this.subMenuPerfil();
  }

  ocultarMenu() {
    document.getElementById("menu").classList.toggle("display");
  }
}

interface Deporte {
  Horario: string[]
}