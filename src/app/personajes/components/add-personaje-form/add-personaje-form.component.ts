import { Component, EventEmitter, Output } from '@angular/core';
import { tipoPersonaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'app-add-personaje-form',
  templateUrl: './add-personaje-form.component.html',
  styleUrls: ['./add-personaje-form.component.css']
})
export class AddPersonajeFormComponent {


@Output()
public entradaNuevoPersonaje: EventEmitter<tipoPersonaje>= new EventEmitter();
 
public personajeDefinido: tipoPersonaje={
  name: '',
  edad: 0
}


agregarPersonaje():void{
if(this.personajeDefinido.name.length === 0) return;
this.entradaNuevoPersonaje.emit(this.personajeDefinido)

this.personajeDefinido = {name:'', edad: 0}
  console.log(this.personajeDefinido)
}

}
