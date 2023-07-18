import { Injectable } from '@angular/core';
import { tipoPersonaje } from '../interfaces/personaje.interface';
import { v4 as uuid } from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  
  public personajesMain: tipoPersonaje[]=[
    {id: uuid(), name:"Bob Esponja" , edad:5},
    {id: uuid(), name:"AAAAAAA" , edad:1},
    {id: uuid(), name:"BBBBBB" , edad:1},
  ];


  funcionEntradaNuevoPersonaje(personaje: tipoPersonaje):void {
    
    const nuevoPersonajeID: tipoPersonaje={id: uuid(), ...personaje}
    this.personajesMain.push(nuevoPersonajeID);
  }

  EliminarPersonajePage(VarindexPage: number){
  this.personajesMain.splice(VarindexPage, 1);
}

EliminarPersonajePageID(id: string){
  this.personajesMain = this.personajesMain.filter( personajesMain => personajesMain.id !== id)
}
  // constructor() { }
}
