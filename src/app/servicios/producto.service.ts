import { Injectable } from '@angular/core';
import { ProductoGetDTO } from '../modelo/producto-get-dto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  productos: ProductoGetDTO[];
  constructor() {
    this.productos = [];
    this.productos.push(new ProductoGetDTO(1, "Televisor LG 4K", "Descripcion 1", 3500000, 2,
      ["../assets/imagenes/tv_curved.jpg"], ["TECNOLOGIA"]));
    this.productos.push(new ProductoGetDTO(2, "Tenis Nike", "Descripcion 2", 650000, 4,
      ["https://agaval.vtexassets.com/arquivos/ids/508291/02201303Y0848-1.jpg?v=637690531248870000"], ["ROPA", "DEPORTE"]));
    this.productos.push(new ProductoGetDTO(3, "Televisor", "Descripcion 2", 1000000, 4,
      ["../assets/imagenes/tv.jpeg"], ["TECNOLOGIA"]));
  }
  public listar(): ProductoGetDTO[] {
    return this.productos;
  }

  public obtener(codigo: number): ProductoGetDTO | undefined {
    return this.productos.find(p => p.codigo == codigo);
  }
}
