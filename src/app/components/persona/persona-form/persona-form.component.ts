import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaService } from 'src/app/services/persona.service';
import { PaisService } from 'src/app/services/pais.service';
import { EstadoService } from 'src/app/services/estado.service';
import { Persona } from 'src/app/models/persona.model';
import { Pais } from 'src/app/models/pais.model';
import { Estado } from 'src/app/models/estado.model';

@Component({
  selector: 'app-persona-form',
  templateUrl: './persona-form.component.html'
})
export class PersonaFormComponent implements OnInit {
  persona: Persona = {
    nombre: '',
    apellido: '',
    edad: 0,
    pais: {} as Pais,
    estado: {} as Estado
  };

  paises: Pais[] = [];
  estados: Estado[] = [];
  modoEdicion = false;
  personaId: number = 0;

  constructor(
    private personaService: PersonaService,
    private paisService: PaisService,
    private estadoService: EstadoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Cargar países al iniciar
    this.paisService.getAll().subscribe({
      next: (resp) => this.paises = resp,
      error: (err) => console.error('Error al cargar países', err)
    });

    // Verificar si estamos en modo edición
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.modoEdicion = true;
      this.personaId = +idParam;

      this.personaService.getById(this.personaId).subscribe({
        next: (persona) => {
          this.persona = persona;

          // Cargar estados del país actual de la persona
          this.estadoService.getAll(persona.pais.id!).subscribe({
            next: (estados) => {
              this.estados = estados;
            },
            error: (err) => console.error('Error al cargar estados para edición', err)
          });
        },
        error: (err) => console.error('Error al cargar persona', err)
      });
    }
  }

  cargarEstadosPorPaisId(event: any): void {
    const idPais = +event.target.value;

    this.estadoService.getAll(idPais).subscribe({
      next: (resp) => this.estados = resp,
      error: (err) => console.error('Error al cargar estados', err)
    });

    const paisSeleccionado = this.paises.find(p => p.id === idPais);
    if (paisSeleccionado) {
      this.persona.pais = paisSeleccionado;
    }
  }

  guardar(): void {
    const personaAEnviar: Persona = {
      ...this.persona,
      pais: { id: this.persona.pais.id },
      estado: { id: this.persona.estado.id }
    };

    if (this.modoEdicion) {
      this.personaService.update(this.personaId, personaAEnviar).subscribe({
        next: () => this.router.navigate(['/personas']),
        error: (err) => console.error('Error al actualizar persona', err)
      });
    } else {
      this.personaService.create(personaAEnviar).subscribe({
        next: () => this.router.navigate(['/personas']),
        error: (err) => console.error('Error al guardar persona', err)
      });
    }
  }
}
