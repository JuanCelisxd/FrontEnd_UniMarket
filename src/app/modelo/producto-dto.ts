export class ProductoDTO {
    nombre: string = "";
    unidades: number = 0;
    descripcion: string = "";
    precio: number = 0;
    imagenes: any;
    fechaLimite: Date = new Date();
    idUsuario: number = 0;
    categoriasList: string[] = [];
}
