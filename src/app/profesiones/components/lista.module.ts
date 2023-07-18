import {NgModule} from '@angular/core';
import { ListaComponent } from './lista-profesiones/lista.component';
import { CommonModule } from '@angular/common';


@NgModule({
        declarations: [
            ListaComponent
        ],
        exports: [
            ListaComponent
        ],
        imports: [
            CommonModule
        ]
    })

export class listaModule {}