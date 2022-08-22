import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservaPageRoutingModule } from './reserva-routing.module';

import { ReservaPage } from './reserva.page';
import { ReservaListComponent } from './reserva-list/reserva-list.component';
import { ReservaItemComponent } from './reserva-item/reserva-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservaPageRoutingModule
  ],
  declarations: [ReservaPage, ReservaListComponent, ReservaItemComponent]
})
export class ReservaPageModule {}
