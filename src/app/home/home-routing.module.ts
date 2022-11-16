import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

import { DetalleComponent } from '../shared/detalle/detalle.component';

const routes: Routes = [
   { 
    path: '', 
    component: HomeComponent,
    children: [
      {
        path: 'detalle',
        component: DetalleComponent //detalle
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
