import { Component, ElementRef, ViewChild } from '@angular/core';
import { Alerta } from 'src/app/modelo/alerta';
import { CompraDto } from 'src/app/modelo/compra-dto';
import { DetalleCompraDTO } from 'src/app/modelo/detalle-compra-dto';
import { ProductoDTO } from 'src/app/modelo/producto-dto';
import { CarritoService } from 'src/app/servicios/carrito.service';
import { CompraService } from 'src/app/servicios/compra.service';
import { ProductoService } from 'src/app/servicios/producto.service';
import { TokenService } from 'src/app/servicios/token.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.css']
})

export class CarritoComprasComponent {

  productos: DetalleCompraDTO[];
  valorTotal: number;
  compra: CompraDto;
  idUsuario: number = 0;
  alerta!: Alerta;

  @ViewChild('btnModalPagoExitoso') btnModalPagoExitoso: ElementRef = {} as ElementRef;

  constructor(private carritoService: CarritoService,
    private productoService: ProductoService,
    private usuarioService: UsuarioService,
    private tokenService: TokenService,
    private compraService: CompraService) {

    this.productos = [];
    this.valorTotal = 0;
    this.compra = new CompraDto();
    this.obtenerUsuarioSesion();

    const listaCodigos = this.carritoService.listar();

    if (listaCodigos.length > 0) {
      for (let cod of listaCodigos) {
        this.productoService.obtener(cod).subscribe({
          next: data => {
            const producto = <ProductoDTO>data.response;
            if (producto != null) {
              this.productos.push(new DetalleCompraDTO(producto, cod, 1));
              this.valorTotal += producto.precio;
            }
          },
          error: error => {
            console.error(error.response)
          }
        });
      };
    }
  }

  aumentarCantidad(item: DetalleCompraDTO) {
    ++item.unidades;
    this.actualizarValorTotal();
  }

  disminuirCantidad(item: DetalleCompraDTO) {
    --item.unidades;
    this.actualizarValorTotal();
  }

  actualizarValorTotal() {
    this.valorTotal = 0;
    for (let producto of this.productos) {
      const valorTotalProducto = producto.unidades * producto.producto.precio;
      this.valorTotal += valorTotalProducto;
    }
  }

  eliminarItem(item: DetalleCompraDTO) {
    const index = this.productos.indexOf(item);
    this.productos.splice(index, 1);
    this.actualizarValorTotal();
  }

  realizarCompra() {
    this.compra.idUsuario = this.idUsuario;
    this.compra.metodoPago = "TARJETA_DEBITO";
    this.compra.detalleCompras = this.productos;

    const objeto = this;

    this.compraService.crearCompra(this.compra).subscribe({
      next: data => {
        this.btnModalPagoExitoso.nativeElement.click();
        this.productos = [];
      },
      error: error => { 
        objeto.alerta = new Alerta("Error al crear la compra " + error.error.response, "danger");
      }
    })

  }

  obtenerUsuarioSesion() {
    const email = this.tokenService.getEmail();

    this.usuarioService.obtenerByEmail(email).subscribe({
      next: data => {
        this.idUsuario = data.response.idUsuario;
      },
      error: error => {
        console.log(error);
      }
    })
  }

}
