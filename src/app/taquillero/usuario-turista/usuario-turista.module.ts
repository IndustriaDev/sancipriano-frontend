import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioTuristaPageRoutingModule } from './usuario-turista-routing.module';

import { UsuarioTuristaPage } from './usuario-turista.page';
import { TuristaListComponent } from './turista-list/turista-list.component';
import { TuristaItemComponent } from './turista-item/turista-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioTuristaPageRoutingModule
  ],
  declarations: [UsuarioTuristaPage, TuristaListComponent, TuristaItemComponent]
})
export class UsuarioTuristaPageModule {}
