import { Component } from '@angular/core';
import { ProductoGetDTO } from 'src/app/modelo/producto-get-dto';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-revisar-productos',
  templateUrl: './revisar-productos.component.html',
  styleUrls: ['./revisar-productos.component.css']
})
export class RevisarProductosComponent {

  productos: ProductoGetDTO[];

  constructor(private productoService: ProductoService) {
    this.productos = [];
    this.obtenerProductos();
  }

  obtenerProductos() {
    this.productoService.listarAllModerador().subscribe({
      next: data => {
        this.productos = data.response;
      },
      error: error => {
        console.log(error);
      }
    })
  }

}
