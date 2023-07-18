import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador/contador.component';
import { ProfesionesComponent } from './profesiones/profesion/profesiones/profesiones.component';
import { listaModule } from './profesiones/components/lista.module';
import { PersonajesModule } from './personajes/personajes.module';
// import { ListaComponent } from './profesiones/lista-profesiones/lista.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    ProfesionesComponent,
    // ListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    listaModule,
    PersonajesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
