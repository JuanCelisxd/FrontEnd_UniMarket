import { ProductoDTO } from "./producto-dto";

export class DetalleCompraDTO {
    producto: ProductoDTO = new ProductoDTO();
    codigo: number = 0;

    constructor(producto: ProductoDTO, codigo: number){
        
    }

}
