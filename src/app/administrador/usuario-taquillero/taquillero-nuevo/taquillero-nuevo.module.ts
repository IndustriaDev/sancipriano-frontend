import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaquilleroNuevoPageRoutingModule } from './taquillero-nuevo-routing.module';

import { TaquilleroNuevoPage } from './taquillero-nuevo.page';
import { TaquilleroFormComponent } from './taquillero-form/taquillero-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TaquilleroNuevoPageRoutingModule
  ],
  declarations: [TaquilleroNuevoPage, TaquilleroFormComponent]
})
export class TaquilleroNuevoPageModule {}
