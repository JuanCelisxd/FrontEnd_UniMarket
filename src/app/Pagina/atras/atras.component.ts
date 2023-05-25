import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-atras',
  templateUrl: './atras.component.html',
  styleUrls: ['./atras.component.css']
})
export class AtrasComponent {

  constructor(private router: Router){

  }
  
  volverInicio(){
    this.router.navigate([""]);
  }
}

