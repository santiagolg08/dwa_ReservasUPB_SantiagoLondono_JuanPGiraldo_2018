import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  email = '';
  password = '';
  errorMessage = '';
  error: { name: string, message: string } = { name: '', message: '' };
  public isLogin = true;

  constructor(public authService: AuthService, private router: Router) {
  }
  ngOnInit() {
  }

  onSignUp(): void {
    if (this.validateForm(this.email, this.password)) {
      this.authService.signUpWithEmail(this.email, this.password)
        .then(() => {
          this.sendEmailVerification();
          this.cambiarForm();
        }).catch(_error => {
          alert("Registro fallido");
          this.error = _error;
        })
    }
  }

  onLoginEmail(): void {
    if (this.validateForm(this.email, this.password)) {
      this.authService.loginWithEmail(this.email, this.password)
        .then(() => {
          this.validateVerificationEmail();
        })
        .catch(_error => {
          alert("Ingreso fallido");
          this.error = _error;
        })
    }
  }

  sendEmailVerification(): void {
    this.authService.sendVerificationEmail()
      .then(() => {
        alert("Correo de verificacion enviado");
      })
      .catch(_error => {
        alert("Error al enviar el correo de verificación");
        this.error = _error;
      })
  }

  validateVerificationEmail():void{
      if(this.authService.currentUserEmailVerified){
        alert("Usuario Ingresado:" + this.authService.currentUserName);
        this.router.navigate(["inicio"]);
      }else{
        alert("Este correo no ha sido verificado");        
        this.authService.signOut();
      }
  }

  validateForm(email: string, password: string): boolean {
    if (email.length === 0) {
      this.errorMessage = 'Por favor ingrese su Email!';
      return false;
    }

    if (password.length === 0) {
      this.errorMessage = 'Por favor ingrese su contraseña';
      return false;
    }

    this.errorMessage = '';

    return true;
  }

  public cambiarForm() {
    this.isLogin = !this.isLogin;
    this.errorMessage = '';
  }

}
