import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  public _teams: any [] = [];
 
  constructor(private http: HttpClient) { 
    this.mostrarTeams();
  }

  private mostrarTeams() {
    this.http.get<any[]>('assets/data/team.json').subscribe( (res) => {
      this._teams = res;  
   });
  }

}
