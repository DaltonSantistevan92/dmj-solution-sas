import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  public _nav: any [] = [];

  constructor(private http:HttpClient) {
    this.mostrarNav();
   }

  private mostrarNav(){
    this.http.get<any[]>('assets/data/nav.json').subscribe( (res) => {
      this._nav = res;
    });
  }
}
