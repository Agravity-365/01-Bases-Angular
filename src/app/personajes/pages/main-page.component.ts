import { Component } from '@angular/core';
import { tipoPersonaje } from '../interfaces/personaje.interface';
import { PersonajesService } from '../services/personajes.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

constructor( public varPersonajeService: PersonajesService ){
}


}
