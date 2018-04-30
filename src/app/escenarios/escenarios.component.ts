import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-escenarios',
  templateUrl: './escenarios.component.html',
  styleUrls: ['./escenarios.component.scss']
})
export class EscenariosComponent implements OnInit {

	clase_activa:string = "futbol_escenario";
	
	escenarios : Array<string>;

  // title: string = 'My first AGM project';
  lat: number = 6.242052007104904;
  lng: number = -75.589807519906;
  zoom:number = 17;
  
  // lat_marker: number = 6.242147994160795;
  // lng_marker: number = -75.59137929438873;



  markers: marker[] = [
	  {	nombre_escenario:"cancha_fundadores",
		  lat: 6.242052007104904,
      lng: -75.589807519906,
		},
	  {
			nombre_escenario:"cancha_bloque19",
			lat: 6.241788699429994,
		  lng: -75.58904748395435,
	  },
	  {
			nombre_escenario:"polideportivo",
			lat: 6.241761590222094,
		  lng: -75.59048652648926,
		 },
		 {
			nombre_escenario:"cancha_tenis",
			lat: 6.241740705871343,
		  lng: -75.5888496710395,
		 }
  ]

  constructor() { 
		this.escenarios = [ 
			"Polideportivo",
			"Cancha de fútbol Fundadores", 
			"Cancha de fútbol Bloque 19",
			"Canchas de tenis",
			"Placas"
		]
	}

  ngOnInit() {
  }

  cambiarEscenario(){
    console.log("cambiando marker");
  }
}

interface marker {
	nombre_escenario:string;
	lat: number;
	lng: number;
}
