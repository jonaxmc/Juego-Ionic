import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Juego5PageRoutingModule } from './juego5-routing.module';

import { Juego5Page } from './juego5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Juego5PageRoutingModule
  ],
  declarations: [Juego5Page]
})
export class Juego5PageModule {}
