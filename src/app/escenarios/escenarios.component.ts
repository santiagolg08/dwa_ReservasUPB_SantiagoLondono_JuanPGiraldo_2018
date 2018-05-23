import { Component, OnInit } from '@angular/core';
import { EscenariosService } from '../../serv/escenarios.service';


@Component({
  selector: 'app-escenarios',
  templateUrl: './escenarios.component.html',
	styleUrls: ['./escenarios.component.scss'],
	providers: [EscenariosService],

})
export class EscenariosComponent implements OnInit {

	lat: number = 6.242052007104904;
  lng: number = -75.589807519906;
	zoom:number = 17;
	
	public escenario_index:number = 0;
	public index_img:number = 0;
	public lista_src_escenarios:string[];

  markers: marker[] = [
	  {	nombre_escenario:"Cancha Fundadores",
		  lat: 6.242182866847922,
			lng: -75.59138774871826
		},
	  {
			nombre_escenario:"Cancha Bloque19",
			lat: 6.241788699429994,
			lng: -75.58904748395435
	  },
	  {
			nombre_escenario:"Polideportivo",
			lat: 6.241761590222094,
			lng: -75.59048652648926
		 },
		 {
			nombre_escenario:"Cancha de Tenis",
			lat: 6.24174127822543,
			lng: -75.5887556921894
		 },
		 {
			nombre_escenario:"Placas Deportivas",
			lat: 6.242205791678962,
			lng: -75.58868069187156
		 }
  ]

	constructor(
		private _escenariosService: EscenariosService
	) { 
		

		setInterval(()=> {
			this.cambiarImg(); },4000); 
	}

  ngOnInit() {
		this.lista_src_escenarios = this._escenariosService.getEscenarios(this.escenario_index);
		console.log(this.lista_src_escenarios);
  }
	
	onChange(escenario_index) {
		this.escenario_index = escenario_index;
		this.lista_src_escenarios = this._escenariosService.getEscenarios(this.escenario_index);
	}
	 
	cambiarImg(){
		if(this.index_img == this.lista_src_escenarios.length-1){
			this.index_img = 0;
		} 
		else{
			this.index_img +=1
		}
		
	 }



}

interface marker {
	nombre_escenario:string;
	lat: number;
	lng: number;
}
