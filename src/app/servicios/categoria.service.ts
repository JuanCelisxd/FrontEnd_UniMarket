import { Injectable } from '@angular/core';
import { CategoriaDTO } from '../modelo/categorias-dto';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  categorias: CategoriaDTO[];
  constructor() {
    this.categorias = [];
    this.categorias.push(
      {
        nombre: "TECNOLOGIA",
        url_imagen: "../assets/imagenes/imagenesGaleria/Tecnologia.jpg"
      },
      {
        nombre: "ENTRETENIMIENTO",
        url_imagen: "../assets/imagenes/imagenesGaleria/Juguete.jpg"
      },
      {
        nombre: "DEPORTE",
        url_imagen: "../assets/imagenes/imagenesGaleria/Bicicleta.jpg"
      },
      {
        nombre: "BELLEZA",
        url_imagen: "../assets/imagenes/imagenesGaleria/Belleza.jpg"
      },
      {
        nombre: "SALUD",
        url_imagen: "../assets/imagenes/imagenesGaleria/Salud.jpg"
      },
      {
        nombre: "VEHICULOS",
        url_imagen: "../assets/imagenes/imagenesGaleria/Vehiculos.jpg"
      },
      {
        nombre: "MODA",
        url_imagen: "../assets/imagenes/imagenesGaleria/Moda.jpg"
      },
      {
        nombre: "INSTRUMENTOS",
        url_imagen: "../assets/imagenes/imagenesGaleria/Instrumentos.jpg"
      },
      {
        nombre: "CONSOLAS",
        url_imagen: "./assets/imagenes/imagenesGaleria/Consolas.jpg"
      },
      {
        nombre: "OTROS",
        url_imagen: "../assets/imagenes/imagenesGaleria/Hogar.jpg"
      }
    )
  }

  public listar(): CategoriaDTO[] {
    return this.categorias;
  }
}