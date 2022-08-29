import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaquilleroNuevoPage } from './taquillero-nuevo.page';

const routes: Routes = [
  {
    path: '',
    component: TaquilleroNuevoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaquilleroNuevoPageRoutingModule {}
