import { Injectable } from '@angular/core';
import { ProductoModeradorDto } from '../modelo/producto-moderador-dto';

@Injectable({
  providedIn: 'root'
})
export class ProductoEstadosService {
  productos:ProductoModeradorDto[];
  
  constructor() { 
    this.productos = [];
    this.productos.push(new ProductoModeradorDto(4, "PC Gamer ", "Descripcion 1", 3500000, 2,
      ["https://cdn.coordiutil.com/imagen-pc_gamer_ryzen_7_7700x_ram_16gb_solido_512_chasis_gamer-2299279-400-400-1-100.jpg"],
       ["TECNOLOGIA"], "EN ESPERA"));
    this.productos.push(new ProductoModeradorDto(5, "Play Station 5", "Descripcion 2", 650000, 4,
      ["https://media.direct.playstation.com/is/image/psdglobal/PS5-Console-Two-Controllers-Hero"],
       ["TECNOLOGIA"], "APROBADO"));
    this.productos.push(new ProductoModeradorDto(6, "AirPods", "Descripcion 3", 120000, 10,
      ["https://i.linio.com/p/033216f2056438950d0dd8cbc544e7a4-product.webp"],
        ["TECNOLOGIA"], "NO APROBADO"));
    this.productos.push(new ProductoModeradorDto(7, "Tenis ASICS GEL-Resolution 8 - Masculino ", "Descripcion 4", 460000, 32,
      ["https://asicsco.vteximg.com.br/arquivos/ids/226395-1000-1000/1041A345_960_SR_RT_GLB.jpg?v=637983317538130000"],
        ["ROPA","DEPORTE"], "EN ESPERA"));
    this.productos.push(new ProductoModeradorDto(8, "Funko POP! Spider-Man", "Descripcion 5", 95000, 7,
      ["https://images.fun.com/products/77362/1-2/funko-pop-spider-man-japanese-tv-series-vinyl-figure.jpg"],
        ["ENTRETENIMIENTO"], "APROBADO"));    
    this.productos.push(new ProductoModeradorDto(9, "Guitarra eléctrica Fender Player Stratocaster", "Descripcion 6", 6930000, 5,
      ["https://http2.mlstatic.com/D_NQ_NP_879506-MLA51667395977_092022-O.webp"],
        ["INSTRUMENTOS"], "EN ESPERA"));    

  }

  public listar():ProductoModeradorDto[]{
    return this.productos;
    }
  public obtener(codigo: number): ProductoModeradorDto | undefined {
    return this.productos.find(p => p.codigo == codigo);
  }

  }


