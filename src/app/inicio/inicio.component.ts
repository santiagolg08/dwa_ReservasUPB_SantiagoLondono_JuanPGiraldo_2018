import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, useAnimation} from '@angular/animations';

import {bounce} from 'ng-animate';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
  animations: [
    trigger('bounce', [transition('* => *', useAnimation(bounce))]),
    trigger('itemAnim', [
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate(350)
      ]),
      transition(':leave', [
            animate('0.2s ease', style({
            transform: 'translate(150px,25px)'
          })),
          animate('0.5s 0.2s ease', style({
            opacity: 0
          }))
        ])
    ]),
  ]
})
export class InicioComponent implements OnInit {

  bounce:any;
  public pos_actual = 0;
  public lista_src_escenarios: Array<string>;
  public heroes:Array<string>;

  constructor() { 
    this.lista_src_escenarios=[
      "../../assets/img/fotos_escenarios/escenario_polideportivo_8.jpg",
      "../../assets/img/fotos_escenarios/escenario_polideportivo_3.JPG",
      "../../assets/img/fotos_escenarios/escenario_fundadores_3.JPG",
      "../../assets/img/fotos_escenarios/escenario_tenis_3.JPG",
      "../../assets/img/fotos_escenarios/escenario_placas_5.JPG",
    ]
    this.heroes=["bsbdfbd","fvdfv","sfsggs"];
  }

  ngOnInit() {

  }
  // Next/previous controls
  public plusSlides(n) {
    document.getElementById("cuadro_inicio").style.opacity = "0.2";
    setTimeout(() => {
      this.volverOpacity();
      if(n>0){
        this.sumarPos();
      }
      if(n<0){
        this.restarPos();
      }
    }, 1500);
  }

  sumarPos(){
    if(this.pos_actual == this.lista_src_escenarios.length -1){
      this.pos_actual = 0;
    }
      else{
        this.pos_actual = this.pos_actual + 1;
      }
     
  }

  restarPos(){
    if(this.pos_actual == 0){
        this.pos_actual = this.lista_src_escenarios.length -1;
      }
      else{
        this.pos_actual = this.pos_actual - 1;
      }
    }

  volverOpacity(){
    document.getElementById("cuadro_inicio").style.opacity = "1";
  } 
  
}
