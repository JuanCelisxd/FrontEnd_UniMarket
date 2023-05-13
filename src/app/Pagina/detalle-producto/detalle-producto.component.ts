import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarritoService } from 'src/app/servicios/carrito.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent {

  codigoProducto:number;

  constructor(private route:ActivatedRoute, private carritoService:CarritoService){
    this.codigoProducto = 0;
    this.route.params.subscribe(params=> {
      this.codigoProducto = params['id']; 
      console.log(this.codigoProducto);
    })

  }
  public agregarCarrito(){
    this.carritoService.agregar(this.codigoProducto);
    }
}
