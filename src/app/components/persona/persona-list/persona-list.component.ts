import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from 'src/app/models/persona.model';

@Component({
  selector: 'app-persona-list',
  templateUrl: './persona-list.component.html'
})
export class PersonaListComponent implements OnInit {
  personas: Persona[] = [];

  constructor(private personaService: PersonaService) {}

  ngOnInit(): void {
    this.cargarPersonas();
  }

  cargarPersonas(): void {
    this.personaService.getAll().subscribe({
      next: (resp) => this.personas = resp,
      error: (err) => console.error('Error al cargar personas', err)
    });
  }

  eliminar(id: number): void {
    if (confirm('¿Deseas eliminar esta persona?')) {
      this.personaService.delete(id).subscribe(() => this.cargarPersonas());
    }
  }
}
