import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Juego5Page } from './juego5.page';

const routes: Routes = [
  {
    path: '',
    component: Juego5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Juego5PageRoutingModule {}
