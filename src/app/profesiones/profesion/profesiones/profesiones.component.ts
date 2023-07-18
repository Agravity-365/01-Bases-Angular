import { Component } from '@angular/core';

@Component({
  selector: 'app-profesiones',
  templateUrl: './profesiones.component.html',
  styleUrls: ['./profesiones.component.css']
})
export class ProfesionesComponent {
public nombreProfesion:string='Bombero'
public edad: number =35

cambiarNombre(): void{
  this.nombreProfesion='Policia'
}

cambiarEdad(): void {
  this.edad=56
}

reset(): void {
  this.nombreProfesion='Bombero'
  this.edad=35

  document.querySelectorAll('h1')!.forEach( element => {
    element.innerHTML = '<h1>hola</h1>'
  }

  )
}

}
