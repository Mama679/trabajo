import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeEmpleadoComponent } from './home-empleado/home-empleado.component';
import { ListadoComponent } from './listado/listado.component';
import { FormularioComponent } from './formulario/formulario.component';

const routes:Routes = [
  {
    path:'', component:HomeEmpleadoComponent,
    children:[
      {
        path:'listado', component:ListadoComponent
      },
      {
        path:'formulario', component:FormularioComponent
      },
      {
        path:'**',redirectTo:'listado'
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class EmpleadoRoutingModule { }
