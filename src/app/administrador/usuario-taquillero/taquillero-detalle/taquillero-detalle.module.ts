import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaquilleroDetallePageRoutingModule } from './taquillero-detalle-routing.module';

import { TaquilleroDetallePage } from './taquillero-detalle.page';
import { TaquilleroCardComponent } from './taquillero-card/taquillero-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaquilleroDetallePageRoutingModule
  ],
  declarations: [TaquilleroDetallePage, TaquilleroCardComponent]
})
export class TaquilleroDetallePageModule {}
