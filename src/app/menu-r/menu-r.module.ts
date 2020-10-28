import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuRPageRoutingModule } from './menu-r-routing.module';

import { MenuRPage } from './menu-r.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuRPageRoutingModule
  ],
  declarations: [MenuRPage]
})
export class MenuRPageModule {}
