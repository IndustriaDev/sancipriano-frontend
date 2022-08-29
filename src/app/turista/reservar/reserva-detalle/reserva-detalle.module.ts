import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservaDetallePageRoutingModule } from './reserva-detalle-routing.module';

import { ReservaDetallePage } from './reserva-detalle.page';
import { FormComponent } from './form/form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ReservaDetallePageRoutingModule
  ],
  declarations: [ReservaDetallePage, FormComponent]
})
export class ReservaDetallePageModule {}
