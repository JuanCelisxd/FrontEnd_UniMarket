import { Component } from '@angular/core';
import { Alerta } from 'src/app/modelo/alerta';
import { UsuarioDTO } from 'src/app/modelo/usuario-dto';
import { TokenService } from 'src/app/servicios/token.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-actualizar-datos',
  templateUrl: './actualizar-datos.component.html',
  styleUrls: ['./actualizar-datos.component.css']
})
export class ActualizarDatosComponent {

  usuario: UsuarioDTO;
  alerta!: Alerta;

  constructor(private usuarioService: UsuarioService, private tokenService: TokenService) {
    this.usuario = new UsuarioDTO();
    this.obtenerUsuario();
  }

  obtenerUsuario() {
    const email = this.tokenService.getEmail();

    this.usuarioService.obtenerByEmail(email).subscribe({
      next: data => {
        this.usuario = data.response;
      },
      error: error => {
        console.log(error);
      }
    })
  }

  public sonIguales(): boolean {
    return this.usuario.password == this.usuario.confirmaPassword;
  }

  actualizar() {
    const objeto = this;
    const idUsuario = this.usuario.idUsuario;
    this.usuarioService.actualizar(idUsuario, this.usuario).subscribe({
      next: data => {
        objeto.alerta = new Alerta(data.response, "success");
      },
      error: error => {
        objeto.alerta = new Alerta(error.response, "danger");
      }
    })



  }
}
