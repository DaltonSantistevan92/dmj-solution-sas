import { Component } from '@angular/core';

import { SwiperOptions } from 'swiper';
import { HerramientaService } from '../../services/herramienta.service';


@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.css']
})
export class SwiperComponent{

  constructor(private _hs:HerramientaService) { }

  config: SwiperOptions = {
    pagination: { 
      el: '.swiper-pagination', 
      clickable: true 
    },
    effect: "slide",
    grabCursor: true,
    scrollbar: { draggable: true },
    navigation: true,
    slidesPerView: 'auto',
    spaceBetween: 50,
    autoplay: { delay: 2000},
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev'
    // },
    
  }; 


  get herramientas(){
    return this._hs._herramientas;
  }


}
