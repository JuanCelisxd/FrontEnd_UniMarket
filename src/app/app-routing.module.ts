import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pagina/inicio/inicio.component.ts';
import { LoginComponent } from './pagina/login/login.component.ts';
import { RegistroComponent } from './pagina/registro/registro.component.ts';

const routes: Routes = [
  {path : "", component: InicioComponent},
  {path : "Login", component: LoginComponent},
  {path : "Registro", component: RegistroComponent},
  {path : "**", pathMatch: "full", redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
