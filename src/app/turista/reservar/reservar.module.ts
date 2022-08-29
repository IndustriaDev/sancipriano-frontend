import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservarPageRoutingModule } from './reservar-routing.module';

import { ReservarPage } from './reservar.page';
import { ReservaListComponent } from './reserva-list/reserva-list.component';
import { ReservaItemComponent } from './reserva-item/reserva-item.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservarPageRoutingModule
  ],
  declarations: [ReservarPage, ReservaListComponent, ReservaItemComponent]
})
export class ReservarPageModule {}
