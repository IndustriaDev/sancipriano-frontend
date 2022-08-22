import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdministradorPageRoutingModule } from './administrador-routing.module';

import { AdministradorPage } from './administrador.page';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioItemComponent } from './usuario-item/usuario-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdministradorPageRoutingModule
  ],
  declarations: [AdministradorPage, UsuarioListComponent, UsuarioItemComponent]
})
export class AdministradorPageModule {}
