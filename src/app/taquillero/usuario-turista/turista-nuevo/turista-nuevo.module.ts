import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TuristaNuevoPageRoutingModule } from './turista-nuevo-routing.module';

import { TuristaNuevoPage } from './turista-nuevo.page';
import { TuristaFormComponent } from './turista-form/turista-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TuristaNuevoPageRoutingModule
  ],
  declarations: [TuristaNuevoPage, TuristaFormComponent]
})
export class TuristaNuevoPageModule {}
