import { ProductoDTO } from "./producto-dto";

export class DetalleCompraDTO {
    producto: ProductoDTO = new ProductoDTO();
    idProducto: number = 0;
    unidades: number = 0;

    constructor(producto: ProductoDTO, idProducto: number, unidades: number) {
        this.idProducto = idProducto;
        this.unidades = unidades;
        this.producto = producto;
    }

}
