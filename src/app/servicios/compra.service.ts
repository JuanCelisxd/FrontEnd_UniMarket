import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CompraDto } from '../modelo/compra-dto';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../modelo/mensaje-dto';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  private compraURL = "http://localhost:8081/api/compra";

  constructor(private http: HttpClient) { }

  public crearCompra(compra: CompraDto): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.compraURL}/crear`, compra);
  }
}
