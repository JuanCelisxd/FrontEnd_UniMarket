import { Component, OnInit } from '@angular/core';
import { ProductoModeradorDto } from 'src/app/modelo/producto-moderador-dto';
import { ProductoEstadosService } from 'src/app/servicios/producto-estados.service';

@Component({
  selector: 'app-aprobar-productos-moderador',
  templateUrl: './aprobar-productos-moderador.component.html',
  styleUrls: ['./aprobar-productos-moderador.component.css']
})
export class AprobarProductosModeradorComponent {
  productos:ProductoModeradorDto[];
  
  
  constructor(private productoServicio:ProductoEstadosService){
    this.productos = [];
  }
  ngOnInit(): void {
    this.productos = this.productoServicio.listar();
  }

  cambiarEstado(nuevoEstado:string, codigo:number){
     const producto = this.productos.find((p) => p.codigo === codigo);
     if (producto) {
      producto.estado = nuevoEstado;
     }
     
}

}