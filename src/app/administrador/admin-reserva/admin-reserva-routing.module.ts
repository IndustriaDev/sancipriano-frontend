import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminReservaPage } from './admin-reserva.page';

const routes: Routes = [
  {
    path: '',
    component: AdminReservaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminReservaPageRoutingModule {}
