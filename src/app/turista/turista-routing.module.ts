import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TuristaPage } from './turista.page';

const routes: Routes = [
  {
    path: '',
    component: TuristaPage
  },
  {
    path: 'reservar',
    loadChildren: () => import('./reservar/reservar.module').then( m => m.ReservarPageModule)
  },
  {
    path: 'registrarse',
    loadChildren: () => import('./registrarse/registrarse.module').then( m => m.RegistrarsePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TuristaPageRoutingModule {}
