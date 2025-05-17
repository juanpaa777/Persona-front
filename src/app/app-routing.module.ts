import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntidadListComponent } from './components/entidad/entidad-list/entidad-list.component';
import { EntidadFormComponent } from './components/entidad/entidad-form/entidad-form.component';
import { PersonaListComponent } from './components/persona/persona-list/persona-list.component';
import { PersonaFormComponent } from './components/persona/persona-form/persona-form.component';

const routes: Routes = [
  { path: 'entidades', component: EntidadListComponent },
  { path: 'entidades/nueva', component: EntidadFormComponent },
  { path: 'personas', component: PersonaListComponent },
  { path: 'personas/nueva', component: PersonaFormComponent },
  { path: 'personas/editar/:id', component: PersonaFormComponent },
  { path: '', redirectTo: 'entidades', pathMatch: 'full' },
  { path: '**', redirectTo: 'entidades' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
