import { Component, EventEmitter, Input, Output } from '@angular/core';
import { tipoPersonaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

@Input() //Entrada
public listaPersonajes: tipoPersonaje[]= [{
  name: 'Super Man',
  edad: 56
},
{
  name: 'one punch man',
  edad: 45
},
{
  name: 'Himura Kenshin',
  edad: 20
},
{
  name: 'Monkey D. Luffy',
  edad: 20
}];

// @Input()
@Output() //salida
public indiceEliminar: EventEmitter<string>= new EventEmitter();

EliminarPersonajeList(id?: string):void{
  // console.log(index)

  if(!id) return;
  this.indiceEliminar.emit(id)
  console.log(id)
}

}
