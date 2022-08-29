import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministradorPage } from './administrador.page';

const routes: Routes = [
  {
    path: '',
    component: AdministradorPage
  },
  {
    path: 'usuario-taquillero',
    loadChildren: () => import('./usuario-taquillero/usuario-taquillero.module').then( m => m.UsuarioTaquilleroPageModule)
  },
  {
    path: 'usuario-turista',
    loadChildren: () => import('./usuario-turista/usuario-turista.module').then( m => m.UsuarioTuristaPageModule)
  },
  {
    path: 'admin-reserva',
    loadChildren: () => import('./admin-reserva/admin-reserva.module').then( m => m.AdminReservaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministradorPageRoutingModule {}
