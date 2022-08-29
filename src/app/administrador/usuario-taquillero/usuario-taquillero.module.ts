import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioTaquilleroPageRoutingModule } from './usuario-taquillero-routing.module';

import { UsuarioTaquilleroPage } from './usuario-taquillero.page';
import { TaquilleroListComponent } from './taquillero-list/taquillero-list.component';
import { TaquilleroItemComponent } from './taquillero-item/taquillero-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioTaquilleroPageRoutingModule
  ],
  declarations: [UsuarioTaquilleroPage, TaquilleroListComponent, TaquilleroItemComponent]
})
export class UsuarioTaquilleroPageModule {}
