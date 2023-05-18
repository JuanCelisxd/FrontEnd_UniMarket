import { Component } from '@angular/core';
import { ProductoDTO } from 'src/app/modelo/producto-dto';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent {
  //Atributos
  categorias: string[];
  productoDTO: ProductoDTO;
  archivos!: FileList;
  //Constructor
  constructor() {
    this.categorias = [];
    this.productoDTO = new ProductoDTO();
  }

  //Funciones
  public crearProducto() {
    if (this.archivos != null && this.archivos.length > 0) {
      console.log(this.productoDTO);
    } else {
      console.log('Debe seleccionar al menos una imagen');
    }
  }
  ngOnInit(): void {
    this.categorias.push('Tecnología');
    this.categorias.push('Hogar');
    this.categorias.push('Deportes');
    this.categorias.push('Moda');
    this.categorias.push('Mascotas');
  }
  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.archivos = event.target.files;
    }
  }


}
