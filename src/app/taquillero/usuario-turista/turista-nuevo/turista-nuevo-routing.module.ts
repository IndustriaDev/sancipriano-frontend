import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TuristaNuevoPage } from './turista-nuevo.page';

const routes: Routes = [
  {
    path: '',
    component: TuristaNuevoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TuristaNuevoPageRoutingModule {}
