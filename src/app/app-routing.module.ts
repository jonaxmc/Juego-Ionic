import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'juego1',
    loadChildren: () => import('./juego1/juego1.module').then( m => m.Juego1PageModule)
  },
  {
    path: 'juego2',
    loadChildren: () => import('./juego2/juego2.module').then( m => m.Juego2PageModule)
  },
  {
    path: 'juego3',
    loadChildren: () => import('./juego3/juego3.module').then( m => m.Juego3PageModule)
  },
 
  {
    path: 'juego5',
    loadChildren: () => import('./juego5/juego5.module').then( m => m.Juego5PageModule)
  },
  {
    path: 'menu-r',
    loadChildren: () => import('./menu-r/menu-r.module').then( m => m.MenuRPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
