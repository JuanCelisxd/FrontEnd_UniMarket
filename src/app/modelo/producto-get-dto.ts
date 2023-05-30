export class ProductoGetDTO {

    idProducto: number=0;
    nombre: string = "";
    descripcion: string = "";
    precio: number = 0;
    unidades: number = 0;
    imagenes: any;
    categorias: string[] = [];
    usuarioCreacion: string = "";


    constructor(idProducto: number, nombre: string, descripcion: string, precio: number, unidades: number, imagen: string[], categorias: string[]){
    
        this.idProducto = idProducto;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.unidades = unidades;
        this.categorias = categorias;
    
    }
    
}
