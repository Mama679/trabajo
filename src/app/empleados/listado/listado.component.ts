import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap,Router  } from "@angular/router";
import { EmpleadoService } from '../empleado.service';
import { Empleado } from '../model/empleado';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent implements OnInit {

   empleados:Empleado[] = [];
   displayedColumns:string[] = ['id','name','username','email','phone','website','accion']
  constructor(private servicio:EmpleadoService, 
              private route:ActivatedRoute,
              private router:Router ) {
    
  }

  ngOnInit(): void {
      this.obtLista();
  }

  obtLista(){
    this.servicio.listarEmpleados().subscribe((resp:any)=>{
      if(!resp.error && resp){
        this.empleados = resp;
      }
      else{
        console.log(resp);
      }
    });
  }

  onNuevo(){
    this.router.navigate(['/empleado/formulario']);
  }
}
