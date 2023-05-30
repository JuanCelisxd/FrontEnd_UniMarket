import { Component } from '@angular/core';
import { Alerta } from 'src/app/modelo/alerta';
import { ProductoDTO } from 'src/app/modelo/producto-dto';
import { UsuarioDTO } from 'src/app/modelo/usuario-dto';
import { CategoriaService } from 'src/app/servicios/categoria.service';
import { ImagenService } from 'src/app/servicios/imagen.service';
import { ProductoService } from 'src/app/servicios/producto.service';
import { TokenService } from 'src/app/servicios/token.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent {

  categorias: string[];
  productoDTO: ProductoDTO;
  archivos!: FileList;
  alerta!: Alerta;
  categoria: string = "";
  idUsuario: number;

  constructor(private imagenService: ImagenService, 
    private productoService: ProductoService, 
    private categoriaService: CategoriaService, 
    private usuarioService: UsuarioService,
    private tokenService: TokenService) {

    this.categorias = [];
    this.productoDTO = new ProductoDTO();
    this.idUsuario = 0;

    this.obtenerUsuarioSesion();
  }

  ngOnInit(): void {
    this.categoriaService.listar().subscribe({
      next: data => {
        this.categorias = data.response;
      },
      error: error => {
        console.log(error.response);
      }
    });

  }

  public crearProducto() {
    const objeto = this;
    this.productoDTO.idUsuario = this.idUsuario;
    this.productoDTO.categoriasList.push(this.categoria);
    console.log(this.productoDTO);

    if (this.productoDTO.imagenes != null) {
      this.productoService.crear(this.productoDTO).subscribe({
        next: data => {
          objeto.alerta = new Alerta(data.response, "success");
        },
        error: error => {
          objeto.alerta = new Alerta(error.error.response, "danger");
        }
      });
    } else {
      objeto.alerta = new Alerta('Debe seleccionar al menos una imagen y subirla', "danger");
    }
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.archivos = event.target.files;
    }
  }

  public subirImagenes() {
    if (this.archivos != null && this.archivos.length > 0) {

      const objetoProducto = this.productoDTO;
      const objeto = this;

      const formData = new FormData();
      formData.append('file', this.archivos[0]);

      let mapImagenes = new Map<string, string>();
      let mapJson = {};

      this.imagenService.subir(formData).subscribe({
        next: data => {
          mapImagenes.set(this.archivos[0].name, data.response.url);
          mapJson = Object.fromEntries(mapImagenes);
          objetoProducto.imagenes = mapJson;
          objeto.alerta = new Alerta('Imagen subida con éxito', "success");
        },
        error: error => {
          console.log(error.response);
          objeto.alerta = new Alerta("Error al subir imagen: " + error.response, "danger");
        }
      });
    } else {
      console.log('Debe seleccionar al menos una imagen y subirla');
    }
  }

  obtenerUsuarioSesion() {
    const email = this.tokenService.getEmail();

    this.usuarioService.obtenerByEmail(email).subscribe({
      next: data => {
        this.idUsuario = data.response.idUsuario;
      },
      error: error => {
        console.log(error);
      }
    })
  }

}
