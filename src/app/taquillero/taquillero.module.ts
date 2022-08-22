import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaquilleroPageRoutingModule } from './taquillero-routing.module';

import { TaquilleroPage } from './taquillero.page';
import { TaquilleroItemComponent } from './taquillero-item/taquillero-item.component';
import { TaquilleroListComponent } from './taquillero-list/taquillero-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaquilleroPageRoutingModule
  ],
  declarations: [TaquilleroPage, TaquilleroListComponent, TaquilleroItemComponent]
})
export class TaquilleroPageModule {}
