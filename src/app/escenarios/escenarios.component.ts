import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-escenarios',
  templateUrl: './escenarios.component.html',
  styleUrls: ['./escenarios.component.scss']
})
export class EscenariosComponent implements OnInit {

	lat: number = 6.242052007104904;
  lng: number = -75.589807519906;
	zoom:number = 17;
	
	escenario_index:number = 0;
	// select_escenarios:any;
  
  // lat_marker: number = 6.242147994160795;
  // lng_marker: number = -75.59137929438873;



  markers: marker[] = [
	  {	nombre_escenario:"cancha_fundadores",
		  lat: 6.242182866847922,
			lng: -75.59138774871826,
			src_img : "../../assets/img/sprites/sprite_1/medal.png",
		},
	  {
			nombre_escenario:"cancha_bloque19",
			lat: 6.241788699429994,
			lng: -75.58904748395435,
			src_img : "../../assets/img/sprites/sprite_1/menu.png",
	  },
	  {
			nombre_escenario:"polideportivo",
			lat: 6.241761590222094,
			lng: -75.59048652648926,
			src_img : "../../assets/img/sprites/sprite_1/profile.png",
		 },
		 {
			nombre_escenario:"cancha_tenis",
			lat: 6.241740705871343,
			lng: -75.5888496710395,
			src_img : "../../assets/img/sprites/sprite_1/favicon.png",
		 }
  ]

  constructor() { 
		
	}

  ngOnInit() {
		
  }
	
	actualizarEscenario(){
		var esc = document.getElementById("escenario_seleccionado");
		var esccc = esc.nodeValue;
		console.log(esccc);
	}

  cambiarEscenario(){
    console.log("cambiando marker");
	}
	
	onChange(escenario_index) {
    this.escenario_index = escenario_index;
  }
}

interface marker {
	nombre_escenario:string;
	lat: number;
	lng: number;
	src_img:string;
}
