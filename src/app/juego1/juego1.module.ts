import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Juego1PageRoutingModule } from './juego1-routing.module';

import { Juego1Page } from './juego1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Juego1PageRoutingModule
  ],
  declarations: [Juego1Page]
})
export class Juego1PageModule {}
