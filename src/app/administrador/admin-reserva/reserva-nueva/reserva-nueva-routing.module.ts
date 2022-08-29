import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservaNuevaPage } from './reserva-nueva.page';

const routes: Routes = [
  {
    path: '',
    component: ReservaNuevaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservaNuevaPageRoutingModule {}
