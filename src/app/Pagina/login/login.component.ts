import { Component } from '@angular/core';
import { SesionDTO } from 'src/app/modelo/sesion-dto';
import { AuthService } from 'src/app/servicios/auth.service';
import { TokenService } from 'src/app/servicios/token.service'
import { Alerta } from 'src/app/modelo/alerta';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginUser: SesionDTO;
  alerta!: Alerta;

  constructor(private authService: AuthService, private tokenService: TokenService, private router: Router) {
    this.loginUser = new SesionDTO();
  }

  public login() {
    console.log(this.loginUser);
    const objeto = this;
    this.authService.login(this.loginUser).subscribe({
      next: data => {
        objeto.tokenService.login(data.response.token);
      },
      error: error => {
        objeto.alerta = new Alerta(error.error.response, "danger");
      }
    });
  }
}
