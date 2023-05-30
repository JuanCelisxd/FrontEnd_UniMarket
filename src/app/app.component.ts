import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { TokenService } from './servicios/token.service';
import { SesionService } from './servicios/sesion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UniMarket';
  isLogged = false;
  email: string = "";
  isAdmin: boolean = false;

  constructor(private tokenService: TokenService, private sesionService: SesionService, private router: Router) {
    const role = this.tokenService.getRole();
    if (role[0] == 'MODERADOR') {
      this.isAdmin = true;
    }
  }

  ngOnInit(): void {
    const objecto = this;

    this.sesionService.currentMessage.subscribe({
      next: data => {
        objecto.actualizarSesion(data);
      }
    });

    this.actualizarSesion(this.tokenService.isLogged());
  }

  private actualizarSesion(estado: boolean) {
    this.isLogged = estado;
    if (estado) {
      this.email = this.tokenService.getEmail();
    }
    else {
      this.email = "";
      this.router.navigate(["/login"]);
    }
  }
  public logout() {
    this.tokenService.logout();
  }

}
