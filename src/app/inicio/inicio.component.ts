import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  public clase_actual = 1;

  constructor() { }

  ngOnInit() {
    // var clases_cuadros = ["cuadro1","cuadro2","cuadro3","cuadro4"] ; 
    // var clase_actual = 0;
  }

  

  // public openModal() {
  //   document.getElementById('myModal').style.display = "block";
  // }
  
    
  // var slideIndex = 1;
  // showSlides(slideIndex);
  
  // Next/previous controls
  public plusSlides(n) {
    if(n>0){
      document.getElementById("c"+this.clase_actual).className = "cuadro" + this.clase_actual + " hidden";
      if(this.clase_actual == 4){
        this.clase_actual = 1;
      }
      else{
        this.clase_actual = this.clase_actual + 1;
      }
      document.getElementById("c"+this.clase_actual).className = "cuadro" + this.clase_actual;
    }
    if(n<0){
      document.getElementById("c"+this.clase_actual).className = "cuadro" + this.clase_actual + " hidden";
      if(this.clase_actual == 1){
        this.clase_actual = 4;
      }
      else{
        this.clase_actual = this.clase_actual - 1;
      }
      document.getElementById("c"+this.clase_actual).className = "cuadro" + this.clase_actual;
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
