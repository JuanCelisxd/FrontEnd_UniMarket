import { Component } from '@angular/core';
import { DetalleCompraDTO } from 'src/app/modelo/detalle-compra-dto';
import { CarritoService } from 'src/app/servicios/carrito.service';
import { ProductoService } from 'src/app/servicios/producto.service';
@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.css']
})

export class CarritoComprasComponent {
  productos:DetalleCompraDTO[];
  valorTotal:number;
  
    constructor(private carritoService:CarritoService, private productoService:ProductoService) {
      this.productos = [];
      this.valorTotal = 0;
      const listaCodigos = this.carritoService.listar();
      if(listaCodigos.length > 0){
        for( let cod of listaCodigos ){
          const producto = this.productoService.obtener(cod);
          if(producto!=null){
          this.productos.push(new DetalleCompraDTO(producto, 1));
          this.valorTotal += producto.precio;
          }
        }
      }
    }
}
