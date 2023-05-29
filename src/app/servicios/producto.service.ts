import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../modelo/mensaje-dto';
import { ProductoDTO } from '../modelo/producto-dto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private productoURL = "http://localhost:8081/api/producto";

  constructor(private http: HttpClient) { }

  public listarAllModerador(): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.productoURL}/moderador/all?page=0&estadoProducto=PENDIENTE`);
  }

  public listarAll(): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.productoURL}/productos/all?page=0`);
  }

  public obtener(idProducto: number): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.productoURL}/obtener/${idProducto}`);
  }

  public crear(producto: ProductoDTO) {
    return this.http.post<MensajeDTO>(`${this.productoURL}/crear`, producto);
  }
}
