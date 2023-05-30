import { Injectable } from '@angular/core';
import { CategoriaDTO } from '../modelo/categorias-dto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../modelo/mensaje-dto';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private catURL = "https://unimarket-production-369a.up.railway.app/api/categorias";

  constructor(private http: HttpClient) { }

  public listar(): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.catURL}/listar`);
  }
}