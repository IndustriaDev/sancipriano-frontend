import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminReservaPageRoutingModule } from './admin-reserva-routing.module';

import { AdminReservaPage } from './admin-reserva.page';
import { ReservaListComponent } from './reserva-list/reserva-list.component';
import { ReservaItemComponent } from './reserva-item/reserva-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminReservaPageRoutingModule
  ],
  declarations: [AdminReservaPage, ReservaListComponent, ReservaItemComponent]
})
export class AdminReservaPageModule {}
