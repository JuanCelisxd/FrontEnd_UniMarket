import { Component, ElementRef, ViewChild } from '@angular/core';
import { DetalleCompraDTO } from 'src/app/modelo/detalle-compra-dto';
import { CarritoService } from 'src/app/servicios/carrito.service';
import { ProductoService } from 'src/app/servicios/producto.service';
@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.css']
})

export class CarritoComprasComponent {
  @ViewChild('btnModalPagoExitoso') btnModalPagoExitoso : ElementRef = {} as ElementRef;
  productos: DetalleCompraDTO[];
  valorTotal: number;

  constructor(private carritoService: CarritoService, private productoService: ProductoService) {
    this.productos = [];
    this.valorTotal = 0;
    const listaCodigos = this.carritoService.listar();
    if (listaCodigos.length > 0) {
      for (let cod of listaCodigos) {
        const producto = this.productoService.obtener(cod);
        if (producto != null) {
          this.productos.push(new DetalleCompraDTO(producto, 1, 1));
          this.valorTotal += producto.precio;
        }
      }
    }
  }

  aumentarCantidad(item: DetalleCompraDTO) {
    ++item.cantidad;
    this.actualizarValorTotal();
  }

  disminuirCantidad(item: DetalleCompraDTO) {
    --item.cantidad;
    this.actualizarValorTotal();
  }

  actualizarValorTotal() {
    this.valorTotal = 0;
    for (let producto of this.productos) {
      const valorTotalProducto = producto.cantidad * producto.producto.precio;
      this.valorTotal += valorTotalProducto;
    }
  }

  eliminarItem(item: DetalleCompraDTO){
    const index = this.productos.indexOf(item);
    this.productos.splice(index, 1);
    this.actualizarValorTotal();
  }

  realizarCompra(){
    console.log("compra realizada");
    this.btnModalPagoExitoso.nativeElement.click();
  }

}
