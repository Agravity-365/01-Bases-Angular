import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {
  title = 'hola mundo';
  public title2:string = 'hola mundo desde segunda propiedad'
  public contador: number= 0


  logicaContador(value: number):void{
    this.contador +=  value
  }

  Reset():void{
    this.contador=0
  }
}
