import { Component } from '@angular/core';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  constructor(private heroService:HeroService) { 
  }

  get heros(){
    return this.heroService._hero;
  }

}
