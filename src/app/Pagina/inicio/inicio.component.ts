import { Component } from '@angular/core';
import { CategoriaService } from 'src/app/servicios/categoria.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent {

  categorias: any;

  constructor(private categoriaService: CategoriaService) {
    this.cargarCategorias();
  }

  private cargarCategorias() {
    this.categoriaService.listar().subscribe({
      next: data => {
        this.categorias = data.response;
      },
      error: error => {
        console.log(error.response)
      }
    });
  }

}
