import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PayerRegisterComponent } from './components/payer-register/payer-register.component';
import { PayerContainerComponent } from './components/payer-container/payer-container.component';
import { PayerTransactionComponent } from './components/payer-transaction/payer-transaction.component';
import { PayerHistoryComponent } from './components/payer-history/payer-history.component';
import { PayerLogInComponent } from './components/payer-log-in/payer-log-in.component';
import { routeGuardGuard } from '../../shared/guards/route-guard.guard';

const routes: Routes = [
  { path: 'register', component: PayerRegisterComponent },
  { path: 'login', component: PayerLogInComponent },
  {
    path: '',
    canActivate: [routeGuardGuard],
    component: PayerContainerComponent,
    children: [
      { path: 'transaction', component: PayerTransactionComponent },
      { path: 'history', component: PayerHistoryComponent },
      { path: 'profile', component: PayerRegisterComponent },
    ],
  },
  {
    path: '',
    redirectTo: "transaction",
    pathMatch: 'full'

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayerRoutingModule {}
