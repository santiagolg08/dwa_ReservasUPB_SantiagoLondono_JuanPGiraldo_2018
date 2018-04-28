import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  public isLogin: boolean;

  constructor(public authService: AuthService, private router: Router) {
  }
  ngOnInit() {
  }

  onSignUp(): void {
    if (this.validateForm(this.email, this.password)) {
      this.authService.signUpWithEmail(this.email, this.password)
        .then(() => {
          alert("Registro exitoso");
        }).catch(_error => {
          alert("Registro fallido");          
          this.error = _error;
        })
    }
  }

  onLoginEmail(): void {
    if (this.validateForm(this.email, this.password)) {
      this.authService.loginWithEmail(this.email, this.password)
        .then(() =>{
          alert("Ingreso exitoso");          
        })
        .catch(_error => {
          alert("Ingreso fallido");          
          this.error = _error;
        })
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

    if (password.length < 6) {
      this.errorMessage = 'La contraseña debe contener al menos 6 caracteres !';
      return false;
    }

    this.errorMessage = '';

    return true;
  }

  public cambiarForm() {
    this.isLogin = !this.isLogin;
  }

}
