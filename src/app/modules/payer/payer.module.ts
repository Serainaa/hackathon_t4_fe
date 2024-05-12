import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayerRegisterComponent } from './components/payer-register/payer-register.component';
import { PayerContainerComponent } from './components/payer-container/payer-container.component';
import { PayerTransactionComponent } from './components/payer-transaction/payer-transaction.component';
import { PayerHistoryComponent } from './components/payer-history/payer-history.component';

import { PayerRoutingModule } from './payer-routing.module';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputGroupModule } from 'primeng/inputgroup';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { PayerShopDropdownComponent } from './components/payer-shop-dropdown/payer-shop-dropdown.component';
import { TransactionTableComponent } from '../../shared/components/transaction-table/transaction-table.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    PayerRegisterComponent,
    PayerContainerComponent,
    PayerTransactionComponent,
    PayerHistoryComponent,
    PayerShopDropdownComponent
  ],
  imports: [
    CommonModule,
    PayerRoutingModule,
    InputGroupAddonModule,
    InputGroupModule,
    ReactiveFormsModule,
    FormsModule,
    CalendarModule,
    InputNumberModule,
    InputTextModule,
    DropdownModule,
    TransactionTableComponent,
    TabMenuModule,
    ToastModule
  ],
  providers: [MessageService]
})
export class PayerModule { }
