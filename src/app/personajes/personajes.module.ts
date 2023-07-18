import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainPageComponent } from "./pages/main-page.component";
import { AddPersonajeFormComponent } from './components/add-personaje-form/add-personaje-form.component';
import { ListComponent } from './components/list/list.component';
import { FormsModule } from "@angular/forms";



@NgModule({
    declarations:[
        MainPageComponent, 
        AddPersonajeFormComponent, 
        ListComponent],
    imports: [
        CommonModule, 
        FormsModule],
    exports: [
        MainPageComponent
    ]
})

export class PersonajesModule {}