import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'payer',
    loadChildren: () => import('./modules/payer/payer.module').then(m => m.PayerModule)
  },
  {
    path: 'shop',
    loadChildren: () => import('./modules/shop/shop.module').then(m => m.ShopModule)
  },
  {
    path: 'provider',
    loadChildren: () => import('./modules/provider/provider.module').then(m => m.ProviderModule)
  }
];
