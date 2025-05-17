import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estado } from '../models/estado.model';
import { environment } from 'src/environments/environment';


@Injectable({ providedIn: 'root' })
export class EstadoService {
  private apiUrl = `${environment.apiUrl}/estados`;

  constructor(private http: HttpClient) {}

  getAll(paisId: number): Observable<Estado[]> {
    return this.http.get<Estado[]>(`${this.apiUrl}/${paisId}`);
  }
}
