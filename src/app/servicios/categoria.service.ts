import { Injectable } from '@angular/core';
import { CategoriaDTO } from '../modelo/categorias-dto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../modelo/mensaje-dto';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private catURL = "http://localhost:8081/api/categorias";

  constructor(private http: HttpClient) { }

  public listar(): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.catURL}/listar`);
  }
}