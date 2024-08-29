import { Component,OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { EmpleadoService } from '../empleado.service';
import { Empleado } from '../model/empleado';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  constructor(private servicio:EmpleadoService, private formBuider: FormBuilder){

  }

}
