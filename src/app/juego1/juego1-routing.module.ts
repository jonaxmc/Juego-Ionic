import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Juego1Page } from './juego1.page';

const routes: Routes = [
  {
    path: '',
    component: Juego1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Juego1PageRoutingModule {}
