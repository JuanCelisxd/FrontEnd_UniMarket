import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})

export class BusquedaComponent {

  textoBusqueda: string;

  constructor(private router: Router) {
    this.textoBusqueda = "";
  }

  public iraBusqueda(valor: string) {
    if (valor) {
      this.textoBusqueda = valor;
      this.router.navigate(["/buscar-producto", valor]);
    }else{
      this.router.navigate(["/buscar-producto"]);
    }
  }

}
