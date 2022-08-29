import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TuristaDetallePageRoutingModule } from './turista-detalle-routing.module';

import { TuristaDetallePage } from './turista-detalle.page';
import { TuristaCardComponent } from './turista-card/turista-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TuristaDetallePageRoutingModule
  ],
  declarations: [TuristaDetallePage, TuristaCardComponent]
})
export class TuristaDetallePageModule {}
