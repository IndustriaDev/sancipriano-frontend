import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaquilleroDetallePage } from './taquillero-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: TaquilleroDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaquilleroDetallePageRoutingModule {}
