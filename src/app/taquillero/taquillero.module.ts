import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaquilleroPageRoutingModule } from './taquillero-routing.module';

import { TaquilleroPage } from './taquillero.page';
import { MenuTaquilleroComponent } from './menu-taquillero/menu-taquillero.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaquilleroPageRoutingModule
  ],
  declarations: [TaquilleroPage, MenuTaquilleroComponent]
})
export class TaquilleroPageModule {}
