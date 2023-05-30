import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './Pagina/inicio/inicio.component';
import { LoginComponent } from './Pagina/login/login.component';
import { RegistroComponent } from './Pagina/registro/registro.component';
import { CrearProductoComponent } from './Pagina/crear-producto/crear-producto.component';
import { BusquedaComponent } from './Pagina/busqueda/busqueda.component';
import { ActualizarDatosComponent } from './Pagina/actualizar-datos/actualizar-datos.component';
import { AprobarProductosModeradorComponent } from './Pagina/aprobar-productos-moderador/aprobar-productos-moderador.component';
import { BuscarProductoComponent } from './Pagina/buscar-producto/buscar-producto.component';
import { CarritoComprasComponent } from './Pagina/carrito-compras/carrito-compras.component';
import { ListarComprasComponent } from './Pagina/listar-compras/listar-compras.component';
import { ListarFavoritosComponent } from './Pagina/listar-favoritos/listar-favoritos.component';
import { ListarProductosModeradorComponent } from './Pagina/listar-productos-moderador/listar-productos-moderador.component';
import { OverviewLogeadoComponent } from './Pagina/overview-logeado/overview-logeado.component';
import { DetalleProductoComponent } from './Pagina/detalle-producto/detalle-producto.component';
import { AtrasComponent } from './Pagina/atras/atras.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AlertaComponent } from './Pagina/alerta/alerta.component';
import { GestionProductosComponent } from './Pagina/gestion-productos/gestion-productos.component';
import { RevisarProductosComponent } from './Pagina/revisar-productos/revisar-productos.component';
import { UsuarioInterceptor } from './interceptor/usuario.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    RegistroComponent,
    CrearProductoComponent,
    BusquedaComponent,
    ActualizarDatosComponent,
    AprobarProductosModeradorComponent,
    BuscarProductoComponent,
    CarritoComprasComponent,
    ListarComprasComponent,
    ListarFavoritosComponent,
    ListarProductosModeradorComponent,
    OverviewLogeadoComponent,
    DetalleProductoComponent,
    AtrasComponent,
    AlertaComponent,
    GestionProductosComponent,
    RevisarProductosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: UsuarioInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
