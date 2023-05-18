export class ProductoGetDTO {
    idProducto: number;
    nombre: string;
    descripcion: string;
    precio: number;
    unidades: number;
    imagen: string[];
    categoria: string[];

    constructor(idProducto: number, nombre: string = "", descripcion: string = "", precio: number = 0, unidades: number = 0, imagen: string[] = [], categoria: string[] = []) {
        this.idProducto = idProducto;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.unidades = unidades;
        this.imagen = imagen;
        this.categoria = categoria;
    }
}
