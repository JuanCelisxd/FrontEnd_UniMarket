import { ProductoDTO } from "./producto-dto";

export class DetalleCompraDTO {
    producto: ProductoDTO = new ProductoDTO();
    codigo: number = 0;
    cantidad: number = 0;

    constructor(producto: ProductoDTO, codigo: number, cantidad: number) {
        this.producto = producto;
        this.codigo = codigo;
        this.cantidad = cantidad;
    }

}
