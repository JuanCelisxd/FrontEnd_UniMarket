import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ProductoGetDTO } from 'src/app/modelo/producto-get-dto';
import { ProductoModeradorDto } from 'src/app/modelo/producto-moderador-dto';
import { ProductoEstadosService } from 'src/app/servicios/producto-estados.service';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})

export class BusquedaComponent {

  textoBusqueda: string;

  constructor(private route: ActivatedRoute, private router: Router, private productoServicio: ProductoService, private productoAp: ProductoEstadosService) {
    this.textoBusqueda = '';
  }

  public iraBusqueda(valor: string) {
    if (valor) {
      this.router.navigate(["/buscar-producto", valor]);
    } else {
      this.router.navigate(["/buscar-producto"]);
    }
  }

  public obtenerProductos(): ProductoGetDTO[] {
    let productosGet: ProductoGetDTO[] = [];

    this.productoServicio.listarAll().subscribe({
      next: data => {
        productosGet = <ProductoGetDTO[]>data.response;
      },
      error: error => {
        console.log(error);
      }
    });

    return productosGet;
  }
}
