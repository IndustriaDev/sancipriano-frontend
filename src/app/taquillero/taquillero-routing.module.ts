import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaquilleroPage } from './taquillero.page';

const routes: Routes = [
  {
    path: '',
    component: TaquilleroPage
  },
  {
    path: 'usuario-turista',
    loadChildren: () => import('./usuario-turista/usuario-turista.module').then( m => m.UsuarioTuristaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaquilleroPageRoutingModule {}
