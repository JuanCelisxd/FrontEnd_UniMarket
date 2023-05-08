import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overview-logeado',
  templateUrl: './overview-logeado.component.html',
  styleUrls: ['./overview-logeado.component.css']
})
export class OverviewLogeadoComponent {
  constructor(private router:Router){}

  public iraBusqueda(valor:String){
    if(valor){
      this.router.navigate(["/busqueda", valor]);
    }
 }
}
