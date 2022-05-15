import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'lanches',
    loadChildren: () => import('./pages/lanches/lanches.module').then( m => m.LanchesPageModule)
  },
  {
    path: 'pratos',
    loadChildren: () => import('./pages/pratos/pratos.module').then( m => m.PratosPageModule)
  },
  {
    path: 'bebidas',
    loadChildren: () => import('./pages/bebidas/bebidas.module').then( m => m.BebidasPageModule)
  },
  {
    path: 'sobremesa',
    loadChildren: () => import('./pages/sobremesa/sobremesa.module').then( m => m.SobremesaPageModule)
  },
  {
    path: 'prato-dia',
    loadChildren: () => import('./pages/prato-dia/prato-dia.module').then( m => m.PratoDiaPageModule)
  },
  {
    path: 'entrada',
    loadChildren: () => import('./pages/entrada/entrada.module').then( m => m.EntradaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
