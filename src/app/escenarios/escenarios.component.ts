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

  constructor() { }

  ngOnInit() {
  }

}
