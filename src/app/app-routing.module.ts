import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearProductoComponent } from './Pagina/crear-producto/crear-producto.component';
import { InicioComponent } from './Pagina/inicio/inicio.component';
import { LoginComponent } from './Pagina/login/login.component';
import { RegistroComponent } from './Pagina/registro/registro.component';

const routes: Routes = [
  {path : "", component: InicioComponent},
  {path : "login", component: LoginComponent},
  {path : "registro", component: RegistroComponent},
  {path: "crear-producto", component: CrearProductoComponent},
  {path : "**", pathMatch: "full", redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
