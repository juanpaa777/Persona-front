import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pais } from '../models/pais.model';
import { environment } from 'src/environments/environments';

@Injectable({ providedIn: 'root' })
export class PaisService {
  private apiUrl = `${environment.apiUrl}/pais`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Pais[]> {
    return this.http.get<Pais[]>(this.apiUrl);
  }
}
