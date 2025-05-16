import { Estado } from './estado.model';
import { Pais } from './pais.model';

export interface Persona {
  id?: number;
  nombre: string;
  apellido: string;
  edad: number;
  pais: Pais;
  estado: Estado;
}
