import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaDTO } from 'src/app/modelo/categorias-dto';
import { CategoriaService } from 'src/app/servicios/categoria.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent {

  categorias: CategoriaDTO[];

  constructor(private router: Router, private categoriaService: CategoriaService) {
    this.categorias = categoriaService.listar();
  }
  
}
