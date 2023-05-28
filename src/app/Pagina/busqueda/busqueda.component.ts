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
  productos: ProductoGetDTO[];
  productosAprobados:ProductoModeradorDto[];
  filtro: ProductoGetDTO[];

  constructor(private route:ActivatedRoute, private router:Router, private productoServicio:ProductoService, private productoAp:ProductoEstadosService){
    this.textoBusqueda = "";
    this.productos = this.productoServicio.listar();
    this.productosAprobados = this.productoAp.listar();
    this.filtro = [];
    this.route.params.subscribe(params=> {
      this.textoBusqueda = params['texto'];
      this.filtro = this.productos.filter(p => 
      p.nombre.toLocaleLowerCase().includes(this.textoBusqueda.toLocaleLowerCase()));
      console.log(this.textoBusqueda);
      this.filtro = this.productosAprobados.filter(p =>
        p.nombre.toLocaleLowerCase().includes(this.textoBusqueda.toLocaleLowerCase()));
    })
  }
  public iraBusqueda(valor: string) {
    if (valor) {
      this.router.navigate(["/buscar-producto", valor]);
    }else{
      this.router.navigate(["/buscar-producto"]);
    }
  }


 

}
