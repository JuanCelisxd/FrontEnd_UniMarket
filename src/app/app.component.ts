import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UniMarket';
  router:Router 
  public iraBusqueda(valor:String){
    if(valor){
      this.router.navigate(["/busqueda", valor]);
    }
  }
}
