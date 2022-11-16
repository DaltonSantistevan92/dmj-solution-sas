import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HerramientaService {

  public _herramientas: any [] = [];

  constructor(private http: HttpClient) { 
    this.mostrarHerramientas();
  }

  private mostrarHerramientas(){
    this.http.get<any[]>('assets/data/herramientas.json').subscribe( (res) => {
      this._herramientas = res;
    });
  }
}
