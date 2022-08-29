import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservaNuevaPageRoutingModule } from './reserva-nueva-routing.module';

import { ReservaNuevaPage } from './reserva-nueva.page';
import { ReservaFormComponent } from './reserva-form/reserva-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ReservaNuevaPageRoutingModule
  ],
  declarations: [ReservaNuevaPage, ReservaFormComponent]
})
export class ReservaNuevaPageModule {}
