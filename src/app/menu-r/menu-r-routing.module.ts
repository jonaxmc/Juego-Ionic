import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuRPage } from './menu-r.page';

const routes: Routes = [
  {
    path: '',
    component: MenuRPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuRPageRoutingModule {}
