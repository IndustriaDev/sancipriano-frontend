import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservarPage } from './reservar.page';

const routes: Routes = [
  {
    path: '',
    component: ReservarPage
  },
  {
    path: 'reserva-detalle/:id',
    loadChildren: () => import('./reserva-detalle/reserva-detalle.module').then( m => m.ReservaDetallePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservarPageRoutingModule {}
