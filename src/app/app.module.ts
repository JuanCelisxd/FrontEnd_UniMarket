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
import { ConfirmaSubastaComponent } from './Pagina/confirma-subasta/confirma-subasta.component';
import { IndexModeradorComponent } from './Pagina/index-moderador/index-moderador.component';
import { IndexUsuarioComponent } from './Pagina/index-usuario/index-usuario.component';
import { ListarComprasComponent } from './Pagina/listar-compras/listar-compras.component';
import { ListarFavoritosComponent } from './Pagina/listar-favoritos/listar-favoritos.component';
import { ListarProductosModeradorComponent } from './Pagina/listar-productos-moderador/listar-productos-moderador.component';
import { PublicarProductoComponent } from './Pagina/publicar-producto/publicar-producto.component';
import { RealizarPagoComponent } from './Pagina/realizar-pago/realizar-pago.component';
import { SubastaComponent } from './Pagina/subasta/subasta.component';
import { VerProductoComponent } from './Pagina/ver-producto/ver-producto.component';
import { OverviewLogeadoComponent } from './Pagina/overview-logeado/overview-logeado.component';
import { DetalleProductoComponent } from './Pagina/detalle-producto/detalle-producto.component';
import { AtrasComponent } from './Pagina/atras/atras.component';
import { HttpClientModule } from '@angular/common/http';
import { AlertaComponent } from './Pagina/alerta/alerta.component';
import { GestionProductosComponent } from './Pagina/gestion-productos/gestion-productos.component';


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
    ConfirmaSubastaComponent,
    IndexModeradorComponent,
    IndexUsuarioComponent,
    ListarComprasComponent,
    ListarFavoritosComponent,
    ListarProductosModeradorComponent,
    PublicarProductoComponent,
    RealizarPagoComponent,
    SubastaComponent,
    VerProductoComponent,
    OverviewLogeadoComponent,
    DetalleProductoComponent,
    AtrasComponent,
    AlertaComponent,
    GestionProductosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
