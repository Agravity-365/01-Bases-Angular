import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-profesiones',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
public listaProfesiones: string[] = ['Medico', 'Abogado','Ingeniero', 'Profesor','Arquitecto','Contador', 'Enfermera','Chef','Progrador'];
public itemEliminado?: string;

eliminarUltimoItem():void{
this.itemEliminado=this.listaProfesiones.pop();
  // console.log(itemEliminado);
  console.log(this.listaProfesiones.length)
  
}

}
