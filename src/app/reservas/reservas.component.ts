import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Reserva } from '../deportes/reserva';
import { EscenariosService } from '../services/escenarios.service';
import { Escenarios } from '../escenarios/escenarios';
import { DeportesService } from '../services/deportes.service';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss'],
  providers: [DatePipe]
})
export class ReservasComponent implements OnInit {

  public idUser: string;
  public lstReservas: Reserva[] = [];
  public lstEscenarios: Escenarios[] = [];

  constructor(
    private authService: AuthService,
    private escenarioService: EscenariosService,
    private deporteService: DeportesService,
    private datePipe: DatePipe
  ) {  }

  ngOnInit() {
    this.idUser = this.authService.currentUserId;
    this.obtenerDatos();
  }

  obtenerDatos(){
    this.escenarioService.getListaEscenarios().snapshotChanges()
    .subscribe(item => {
      let array : Escenarios[] = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        array.push(x as Escenarios);
      });
      this.lstEscenarios = array;
    });
    this.deporteService.getReservas().snapshotChanges().subscribe(item => {
      let array : Reserva[] = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        array.push(x as Reserva);
      });
      this.lstReservas = array;
    });
  }

  buscarNombreEscenario(id){
    for (let i = 0; i < this.lstEscenarios.length; i++) {
      if(id == this.lstEscenarios[i].id){
        return this.lstEscenarios[i].$key;
      }      
    }
  }

  transformarFecha(fecha){
    return this.datePipe.transform(fecha, 'yyyy-MM-dd hh:mm');
  }

  eliminarReserva(key, index){
    this.deporteService.eliminarReserva(key);
  }
}
