import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoGetDTO } from 'src/app/modelo/producto-get-dto';
import { ProductoModeradorDto } from 'src/app/modelo/producto-moderador-dto';
import { CarritoService } from 'src/app/servicios/carrito.service';
import { ProductoEstadosService } from 'src/app/servicios/producto-estados.service';
import { ProductoService } from 'src/app/servicios/producto.service';
import { Alerta } from 'src/app/modelo/alerta';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent {

  codigoProducto: number;
  producto: ProductoGetDTO;
  productosAprobados: ProductoModeradorDto | undefined;
  alerta!: Alerta;

  constructor(private route: ActivatedRoute, private carritoService: CarritoService, private productoService: ProductoService, private productoAp: ProductoEstadosService) {
    this.codigoProducto = 0;
    this.producto = new ProductoGetDTO(0, '', '', 0, 0, [], []);

    this.route.params.subscribe(params => {
      this.codigoProducto = params['id'];
      this.productoService.obtener(this.codigoProducto).subscribe({
        next: data => {
          this.producto = <ProductoGetDTO>data.response;
        },
        error: error => {
          console.error(error.response)
        }
      });

      this.productosAprobados = this.productoAp.obtener(this.codigoProducto);

    })

  }
  public agregarCarrito() {
    const objeto = this;
    this.carritoService.agregar(this.codigoProducto);
    objeto.alerta = new Alerta("Producto agregado con éxito", "success");
  }


}
