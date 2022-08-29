import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioTaquilleroPage } from './usuario-taquillero.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioTaquilleroPage
  },
  {
    path: 'taquillero-nuevo',
    loadChildren: () => import('./taquillero-nuevo/taquillero-nuevo.module').then( m => m.TaquilleroNuevoPageModule)
  },
  {
    path: 'taquillero-detalle/:id',
    loadChildren: () => import('./taquillero-detalle/taquillero-detalle.module').then( m => m.TaquilleroDetallePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioTaquilleroPageRoutingModule {}
