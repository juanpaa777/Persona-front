import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntidadListComponent } from './components/entidad/entidad-list/entidad-list.component';
import { EntidadFormComponent } from './components/entidad/entidad-form/entidad-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonaListComponent } from './components/persona/persona-list/persona-list.component';
import { PersonaFormComponent } from './components/persona/persona-form/persona-form.component';

@NgModule({
  declarations: [
    AppComponent,
    EntidadListComponent,
    EntidadFormComponent,
    PersonaListComponent,
    PersonaFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
