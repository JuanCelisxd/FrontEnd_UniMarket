import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoGetDTO } from 'src/app/modelo/producto-get-dto';
import { CarritoService } from 'src/app/servicios/carrito.service';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent {

  codigoProducto: number;
  producto: ProductoGetDTO | undefined;

  constructor(private route: ActivatedRoute, private carritoService: CarritoService, private productoService: ProductoService) {
    this.codigoProducto = 0;
    this.route.params.subscribe(params => {
      this.codigoProducto = params['id'];
      this.producto = this.productoService.obtener(this.codigoProducto);      
    })

  }
  public agregarCarrito() {
    console.log(this.codigoProducto);
    this.carritoService.agregar(this.codigoProducto);
    console.log(this.carritoService.listar());
  }


}
