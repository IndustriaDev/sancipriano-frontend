import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TuristaDetallePage } from './turista-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: TuristaDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TuristaDetallePageRoutingModule {}
