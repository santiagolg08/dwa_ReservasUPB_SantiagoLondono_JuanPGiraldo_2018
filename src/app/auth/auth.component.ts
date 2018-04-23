import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  public config:Object;
  public usuario:Object; 
  public isLogin: boolean; 

  constructor() {
    this.config = {
      apiKey: "AIzaSyAki17Jt5KtqZD0qVRTe3E4-SYrq8IUOEA",
      authDomain: "reservasupb.firebaseapp.com",
      databaseURL: "https://reservasupb.firebaseio.com",
      projectId: "reservasupb",
      storageBucket: "reservasupb.appspot.com",
      messagingSenderId: "608631006074"
    };
    this.isLogin = true;
   }
  ngOnInit() {
    if (!firebase.apps.length) {
      firebase.initializeApp(this.config);
    }
  }


public logearUsuario() {
  let inputEmail = <HTMLInputElement>document.getElementById("emailLogin");
  let inputPassword = <HTMLInputElement>document.getElementById("passwordLogin");
  if (inputEmail.value != "" && inputPassword.value != "") {
    firebase.auth().signInWithEmailAndPassword(inputEmail.value, inputPassword.value).then(function (user) {
      if (user.emailVerified) {
        this.usuario = user;
        alert("Usuario ingresado: " + user.email);
        this.formLogin.reset();
      } else {
        firebase.auth().signOut().then(function () {
          alert("Correo electronico no verificado");
        }).catch(function (error) {
          // An error happened.
        });
      }
    }, function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
      // ...
    });
  }
  return false;
}

public crearUsuario() {
  let inputEmail = <HTMLInputElement>document.getElementById("emailRegistro");
  let inputPassword = <HTMLInputElement>document.getElementById("passwordRegistro");
  if (inputEmail.value != "" && inputPassword.value != "") {
    firebase.auth().createUserWithEmailAndPassword(inputEmail.value, inputPassword.value).then(function (user) {
      user.sendEmailVerification().then(function () {
        alert("Correo de verificación enviado");
        this.loginUsuario();
      }).catch(function (error) {
        // An error happened.
        alert("No se envió el correo de verificación");
      });
    }, function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
      // ...
    });
  }
  return false;
}

public registrarCuenta() {
  this.isLogin = false;
}

public loginUsuario() {
  this.isLogin = true;
}


}
