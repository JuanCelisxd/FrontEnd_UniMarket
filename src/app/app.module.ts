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


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    RegistroComponent,
    CrearProductoComponent,
    BusquedaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
