import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Juego3PageRoutingModule } from './juego3-routing.module';

import { Juego3Page } from './juego3.page';
import { DragulaModule } from 'ng2-dragula';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Juego3PageRoutingModule,
    DragulaModule
  ],
  declarations: [Juego3Page]
})
export class Juego3PageModule {}
