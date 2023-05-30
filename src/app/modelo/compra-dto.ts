import { DetalleCompraDTO } from "./detalle-compra-dto";

export class CompraDto {
    idUsuario: number = 0;
    detalleCompras: DetalleCompraDTO[] = [];
    metodoPago: string = "";
}
