import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearProductoComponent } from './Pagina/crear-producto/crear-producto.component';
import { InicioComponent } from './Pagina/inicio/inicio.component';
import { LoginComponent } from './Pagina/login/login.component';
import { RegistroComponent } from './Pagina/registro/registro.component';
import { ActualizarDatosComponent } from './Pagina/actualizar-datos/actualizar-datos.component';
import { AprobarProductosModeradorComponent } from './Pagina/aprobar-productos-moderador/aprobar-productos-moderador.component';
import { BuscarProductoComponent } from './Pagina/buscar-producto/buscar-producto.component';
import { BusquedaComponent } from './Pagina/busqueda/busqueda.component';
import { CarritoComprasComponent } from './Pagina/carrito-compras/carrito-compras.component';
import { ListarComprasComponent } from './Pagina/listar-compras/listar-compras.component';
import { ListarFavoritosComponent } from './Pagina/listar-favoritos/listar-favoritos.component';
import { ListarProductosModeradorComponent } from './Pagina/listar-productos-moderador/listar-productos-moderador.component';
import { DetalleProductoComponent } from './Pagina/detalle-producto/detalle-producto.component';
import { GestionProductosComponent } from './Pagina/gestion-productos/gestion-productos.component';
import { LoginGuard } from './guards/permiso.service';
import { RevisarProductosComponent } from './Pagina/revisar-productos/revisar-productos.component';
import { RolesGuard } from './guards/roles.service';

const routes: Routes = [
  { path: "", component: InicioComponent },
  { path: "login", component: LoginComponent, canActivate: [LoginGuard] },
  { path: "registro", component: RegistroComponent, canActivate: [LoginGuard] },
  {
    path: "crear-producto", component: CrearProductoComponent, canActivate: [RolesGuard], data: {
      expectedRole: ["CLIENTE"]
    }
  },
  { path: "actualizar-datos", component: ActualizarDatosComponent },
  { path: "aprobar-productos-moderador", component: AprobarProductosModeradorComponent },
  { path: "busqueda", component: BusquedaComponent },
  { path: "busqueda/:texto", component: BusquedaComponent },
  { path: "carrito-compras", component: CarritoComprasComponent },
  { path: "listar-compras", component: ListarComprasComponent },
  { path: "listar-favoritos", component: ListarFavoritosComponent },
  { path: "listar-productos-moderador", component: ListarProductosModeradorComponent },
  { path: "buscar-producto", component: BuscarProductoComponent },
  { path: "buscar-producto/:texto", component: BuscarProductoComponent },
  { path: "detalle-producto/:id", component: DetalleProductoComponent },
  {
    path: "gestion-productos", component: GestionProductosComponent, canActivate: [RolesGuard], data: {
      expectedRole: ["MODERADOR"]
    }
  },
  {
    path: "revisar-productos", component: RevisarProductosComponent, canActivate: [RolesGuard], data: {
      expectedRole: ["MODERADOR"]
    }
  },
  { path: "**", pathMatch: "full", redirectTo: "" },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
