import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminReservaPageRoutingModule } from './admin-reserva-routing.module';

import { AdminReservaPage } from './admin-reserva.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminReservaPageRoutingModule
  ],
  declarations: [AdminReservaPage]
})
export class AdminReservaPageModule {}
