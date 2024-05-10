import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayerRoutingModule } from './payer-routing.module';
import { PayerRegisterComponent } from './payer-register/payer-register.component';
import { PayerContainerComponent } from './payer-container/payer-container.component';
import { PayerTransactionComponent } from './payer-transaction/payer-transaction.component';
import { PayerHistoryComponent } from './payer-history/payer-history.component';

import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputGroupModule } from 'primeng/inputgroup';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PayerRegisterComponent,
    PayerContainerComponent,
    PayerTransactionComponent,
    PayerHistoryComponent
  ],
  imports: [
    CommonModule,
    PayerRoutingModule,
    InputGroupAddonModule,
    InputGroupModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PayerModule { }
