import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-escenarios',
  templateUrl: './escenarios.component.html',
  styleUrls: ['./escenarios.component.scss']
})
export class EscenariosComponent implements OnInit {

  title: string = 'My first AGM project';
  lat: number = 6.242052007104904;
  lng: number = -75.589807519906;
  zoom:number = 17;
  
  lat_marker: number = 6.242147994160795;
  lng_marker: number = -75.59137929438873;

  // markers: marker[] = [
	//   {
	// 	  lat: 6.242286642099361,
  //     lng: -75.5912827348642,
	// 	  label: 'A',
	// 	  draggable: true
	//   },
	//   {
	// 	  lat: 51.373858,
	// 	  lng: 7.215982,
	// 	  label: 'B',
	// 	  draggable: false
	//   },
	//   {
	// 	  lat: 51.723858,
	// 	  lng: 7.895982,
	// 	  label: 'C',
	// 	  draggable: true
	//   }
  // ]

  constructor() { }

  ngOnInit() {
  }

  cambiarEscenario(){
    console.log("cambiando marker");
  }
}

// interface marker {
// 	lat: number;
// 	lng: number;
// 	label?: string;
// 	draggable: boolean;
// }
