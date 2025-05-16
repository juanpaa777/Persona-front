import { Component, OnInit } from '@angular/core';
import { EntidadService } from 'src/app/services/entidad.service';
import { Entidad } from 'src/app/models/entidad.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entidad-list',
  templateUrl: './entidad-list.component.html',
})
export class EntidadListComponent implements OnInit {
  entidades: Entidad[] = [];

  constructor(
    private entidadService: EntidadService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.obtenerEntidades();
  }

  obtenerEntidades(): void {
    this.entidadService.getAll().subscribe({
      next: data => this.entidades = data,
      error: err => console.error('Error al obtener entidades', err)
    });
  }

  editarEntidad(id: number): void {
    this.router.navigate(['/entidades/editar', id]);
  }

  eliminarEntidad(id: number): void {
    if (confirm('¿Seguro que deseas eliminar esta entidad?')) {
      this.entidadService.delete(id).subscribe(() => {
        this.obtenerEntidades(); // Recargar lista
      });
    }
  }
}
