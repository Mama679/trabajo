import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, last, map, tap} from 'rxjs/operators';
import {of,Observable,throwError} from 'rxjs'
import { Empleado, Address, Geo, Company } from './model/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  
  url:string ="https://jsonplaceholder.typicode.com/";
  resultados:Empleado[] = [];
  constructor(private http:HttpClient) { }

  listarEmpleados(){
    const verurl = this.url + 'users';
    return this.http.get(verurl).pipe(
      map((resp:any) =>{
        this.resultados = resp;
        return resp;
      }), catchError((err:any) =>{
        return of(err);
      })
    );
  }
}
