import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminReservaPage } from './admin-reserva.page';

const routes: Routes = [
  {
    path: '',
    component: AdminReservaPage
  },
  {
    path: 'reserva-nueva',
    loadChildren: () => import('./reserva-nueva/reserva-nueva.module').then( m => m.ReservaNuevaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminReservaPageRoutingModule {}
