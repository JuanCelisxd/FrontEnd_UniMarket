import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoGetDTO } from 'src/app/modelo/producto-get-dto';
import { ProductoService } from 'src/app/servicios/producto.service';
import { ProductoModeradorDto } from 'src/app/modelo/producto-moderador-dto';
import { ProductoEstadosService } from 'src/app/servicios/producto-estados.service';
import { CategoriaService } from 'src/app/servicios/categoria.service';

@Component({
  selector: 'app-buscar-producto',
  templateUrl: './buscar-producto.component.html',
  styleUrls: ['./buscar-producto.component.css']
})
export class BuscarProductoComponent {

  productos: ProductoGetDTO[] = [];
  filtro: ProductoGetDTO[] = [];
  categorias: string[];
  //productosAprobados: ProductoModeradorDto[];
  textoBusqueda: string;
  categoraFilter: string = "";

  constructor(private route: ActivatedRoute, private router: Router, private productoServicio: ProductoService, private productoAp: ProductoEstadosService, private categoriaService: CategoriaService) {

    this.textoBusqueda = "";
    this.categorias = [];
    this.obtenerCategorias();

    this.productoServicio.listarAll().subscribe({
      next: data => {
        this.productos = data.response;
        this.filtro = this.productos;

        this.route.params.subscribe(params => {
          this.textoBusqueda = params["texto"];
          if (this.textoBusqueda && this.textoBusqueda != "") {
            this.filtro = this.productos.filter(p => p.nombre.toLocaleLowerCase().includes(this.textoBusqueda.toLocaleLowerCase()));

            /*this.filtro = this.productosAprobados.filter(p =>
              p.nombre.toLocaleLowerCase().includes(this.textoBusqueda.toLocaleLowerCase()));*/
          }
        });
      },
      error: error => {
        console.log(error);
      }
    });

  }

  verDetalleProducto(codigo: number) {
    if (codigo) {
      this.router.navigate(["/detalle-producto", codigo]);
    }
  }

  obtenerCategorias() {
    this.categoriaService.listar().subscribe({
      next: data => {
        this.categorias = data.response;
      },
      error: error => {
        console.log(error);
      }
    })
  }

  filtrarPorCategoria(categoria: string){    
    this.filtro = this.productos.filter(p => p.categorias.includes(categoria));
    this.categoraFilter = categoria;
  }

}
