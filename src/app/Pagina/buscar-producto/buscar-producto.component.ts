import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoGetDTO } from 'src/app/modelo/producto-get-dto';
import { ProductoService } from 'src/app/servicios/producto.service';
import { ProductoModeradorDto } from 'src/app/modelo/producto-moderador-dto';
import { ProductoEstadosService } from 'src/app/servicios/producto-estados.service';

@Component({
  selector: 'app-buscar-producto',
  templateUrl: './buscar-producto.component.html',
  styleUrls: ['./buscar-producto.component.css']
})
export class BuscarProductoComponent {

  productos: any = []
  filtro: ProductoGetDTO[];
  //productosAprobados: ProductoModeradorDto[];
  textoBusqueda: string;

  constructor(private route: ActivatedRoute, private router: Router, private productoServicio: ProductoService, private productoAp: ProductoEstadosService) {
    this.textoBusqueda = "";
    this.productoServicio.listarAll().subscribe({
      next: data => {
        this.productos = data.response;
      },
      error: error => {
        console.log(error);
      }
    });
    console.log(this.productos);
    //this.productosAprobados = this.productoAp.listar();
    this.filtro = this.productos;

    /*this.route.params.subscribe(params => {
      this.textoBusqueda = params["texto"];
      if (this.textoBusqueda && this.textoBusqueda != "") {
        this.filtro = this.productos.filter(p => p.nombre.toLocaleLowerCase().includes(this.textoBusqueda.toLocaleLowerCase()));
        this.filtro = this.productosAprobados.filter(p =>
          p.nombre.toLocaleLowerCase().includes(this.textoBusqueda.toLocaleLowerCase()));
      }
    })*/
  }

  verDetalleProducto(codigo: number) {
    console.log("El codigo del producto es:" + codigo);
    if (codigo) {
      this.router.navigate(["/detalle-producto", codigo]);
    }
  }

  public obtenerProductos(): ProductoGetDTO[] {
    let productosGet: ProductoGetDTO[] = [];



    return productosGet;
  }
}
