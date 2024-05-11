import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PayerRegisterComponent } from './components/payer-register/payer-register.component';
import { PayerContainerComponent } from './components/payer-container/payer-container.component';
import { PayerTransactionComponent } from './components/payer-transaction/payer-transaction.component';
import { PayerHistoryComponent } from './components/payer-history/payer-history.component';

const routes: Routes = [
  { path: 'register', component: PayerRegisterComponent },
  {
    path: '',
    component: PayerContainerComponent,
    children: [
      { path: 'newTransaction', component: PayerTransactionComponent },
      { path: 'history', component: PayerHistoryComponent },
      { path: 'profile', component: PayerRegisterComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayerRoutingModule {}
