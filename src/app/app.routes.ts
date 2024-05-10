import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'payer',
    loadChildren: () => import('./modules/payer/payer.module').then(m => m.PayerModule)
  },
//   {
//     path: 'shopper'
//   },
//   {
//     path: 'provider'
//   }
];
