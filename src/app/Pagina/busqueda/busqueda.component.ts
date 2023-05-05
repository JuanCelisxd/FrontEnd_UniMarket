import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {
  textoBusqueda:String;

  constructor(private route:ActivatedRoute){
    this.textoBusqueda = "";
    this.route.params.subscribe(params=> {
      this.textoBusqueda = params['texto'];
      console.log(this.textoBusqueda);
    })
  }

}
