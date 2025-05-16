import { Component, OnInit } from '@angular/core';
import { EntidadService } from 'src/app/services/entidad.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Entidad } from 'src/app/models/entidad.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-entidad-form',
  templateUrl: './entidad-form.component.html',
})
export class EntidadFormComponent implements OnInit {
  entidadForm!: FormGroup;
  id!: number;
  esEdicion = false;

  constructor(
    private fb: FormBuilder,
    private entidadService: EntidadService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.entidadForm = this.fb.group({
      nombre: ['', Validators.required]
    });

    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.esEdicion = !!this.id;

    if (this.esEdicion) {
      this.entidadService.getById(this.id).subscribe(entidad => {
        this.entidadForm.patchValue(entidad);
      });
    }
  }

  guardar(): void {
    const entidad: Entidad = this.entidadForm.value;

    if (this.esEdicion) {
      this.entidadService.update(this.id, entidad).subscribe(() => {
        this.router.navigate(['/entidades']);
      });
    } else {
      this.entidadService.create(entidad).subscribe(() => {
        this.router.navigate(['/entidades']);
      });
    }
  }
}
