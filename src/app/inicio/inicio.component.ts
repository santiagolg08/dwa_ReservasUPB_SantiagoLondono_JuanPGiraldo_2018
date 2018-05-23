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
    ])
  ]
})
export class InicioComponent implements OnInit {

  bounce:any;
  public pos_actual = 0;
  public lista_src_escenarios: Array<string>;

  constructor() { 
    this.lista_src_escenarios=[
      "../../assets/img/fotos_escenarios/escenario_fundadores_1.JPG",
      "../../assets/img/fotos_escenarios/escenario_fundadores_2.JPG",
      "../../assets/img/fotos_escenarios/escenario_fundadores_3.JPG",
      "../../assets/img/fotos_escenarios/escenario_fundadores_4.JPG"
    ]
  }

  ngOnInit() {

  }
  // Next/previous controls
  public plusSlides(n) {
    if(n>0){
      if(this.pos_actual == this.lista_src_escenarios.length -1){
        this.pos_actual = 0;
      }
      else{
        this.pos_actual = this.pos_actual + 1;
      }
    }

    if(n<0){
      if(this.pos_actual == 0){
        this.pos_actual = this.lista_src_escenarios.length -1;
      }
      else{
        this.pos_actual = this.pos_actual - 1;
      }
    }
    
  }
  
  // Thumbnail image controls
  public currentSlide(n) {
    // showSlides(slideIndex = n);
    alert("mlkdmlefm");
  }
  
  // public showSlides(n) {
  //   var i;
  //   var slides = document.getElementsByClassName("mySlides");
  //   var dots = document.getElementsByClassName("demo");
  //   var captionText = document.getElementById("caption");
  //   if (n > slides.length) {slideIndex = 1}
  //   if (n < 1) {slideIndex = slides.length}
  //   for (i = 0; i < slides.length; i++) {
  //     slides[i].style.display = "none";
  //   }
  //   for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  //   }
  //   slides[slideIndex-1].style.display = "block";
  //   dots[slideIndex-1].className += " active";
  //   captionText.innerHTML = dots[slideIndex-1].alt; 
  // }

}
