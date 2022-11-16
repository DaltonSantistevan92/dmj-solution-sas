import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { HeroComponent } from './hero/hero.component';
import { FooterComponent } from './footer/footer.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { SwiperComponent } from './swiper/swiper.component';
import { FeaturesComponent } from './features/features.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { MensajeComponent } from './mensaje/mensaje.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CountsComponent } from './counts/counts.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { DetalleComponent } from './detalle/detalle.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';


@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    HeroComponent,
    FooterComponent,
    NosotrosComponent,
    SwiperComponent,
    FeaturesComponent,
    ServiciosComponent,
    MensajeComponent,
    PortfolioComponent,
    CountsComponent,
    TestimonialsComponent,
    TeamComponent,
    ContactComponent,
    DetalleComponent
  ],
  imports: [
    CommonModule, 
    NgxUsefulSwiperModule,
    FormsModule,
    ReactiveFormsModule   
  ],
  exports: [
    HeaderComponent,
    NavComponent,
    HeroComponent,
    FooterComponent,
    NosotrosComponent,
    SwiperComponent,
    FeaturesComponent,
    ServiciosComponent,
    MensajeComponent,
    PortfolioComponent,
    CountsComponent,
    TestimonialsComponent,
    TeamComponent,
    ContactComponent,
    DetalleComponent
  ]
})
export class SharedModule { }
