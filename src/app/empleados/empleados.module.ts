import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeEmpleadoComponent } from './home-empleado/home-empleado.component';
import { ListadoComponent } from './listado/listado.component';
import { FormularioComponent } from './formulario/formulario.component';
import { EmpleadoRoutingModule } from './empleado-routing.module';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    HomeEmpleadoComponent,
    ListadoComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,
    EmpleadoRoutingModule,
    MaterialModule
  ],
  exports:[
    ListadoComponent,
    HomeEmpleadoComponent,
    FormularioComponent
  ]
})
export class EmpleadosModule { }
