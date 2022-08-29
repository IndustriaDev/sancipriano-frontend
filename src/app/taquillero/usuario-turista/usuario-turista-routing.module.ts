import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioTuristaPage } from './usuario-turista.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioTuristaPage
  },
  {
    path: 'turista-nuevo',
    loadChildren: () => import('./turista-nuevo/turista-nuevo.module').then( m => m.TuristaNuevoPageModule)
  },
  {
    path: 'turista-detalle',
    loadChildren: () => import('./turista-detalle/turista-detalle.module').then( m => m.TuristaDetallePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioTuristaPageRoutingModule {}
