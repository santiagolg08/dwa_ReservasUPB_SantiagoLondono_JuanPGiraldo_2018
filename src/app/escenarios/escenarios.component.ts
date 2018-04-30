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

  markers: marker[] = [
	  {	nombre_escenario:"Cancha Fundadores",
		  lat: 6.242182866847922,
			lng: -75.59138774871826,
			src_img : "../../assets/img/sprites/sprite_1/medal.png",
		},
	  {
			nombre_escenario:"Cancha Bloque19",
			lat: 6.241788699429994,
			lng: -75.58904748395435,
			src_img : "../../assets/img/sprites/sprite_1/menu.png",
	  },
	  {
			nombre_escenario:"Polideportivo",
			lat: 6.241761590222094,
			lng: -75.59048652648926,
			src_img : "../../assets/img/sprites/sprite_1/profile.png",
		 },
		 {
			nombre_escenario:"Cancha de Tenis",
			lat: 6.241740705871343,
			lng: -75.5888496710395,
			src_img : "../../assets/img/sprites/sprite_1/favicon.png",
		 }
  ]

  constructor() { 
		
	}

  ngOnInit() {
		
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