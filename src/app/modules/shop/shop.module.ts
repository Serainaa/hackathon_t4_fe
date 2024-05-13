import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRegisterComponent } from './components/shop-register/shop-register.component';
import { ShopContainerComponent } from './components/shop-container/shop-container.component';
import { ShopHistoryComponent } from './components/shop-history/shop-history.component';

import { ShopRoutingModule } from './shop-routing.module';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputGroupModule } from 'primeng/inputgroup';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabMenuModule } from 'primeng/tabmenu';
import { TransactionTableComponent } from '../../shared/components/transaction-table/transaction-table.component';

@NgModule({
  declarations: [
    ShopRegisterComponent,
    ShopContainerComponent,
    ShopHistoryComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    InputGroupAddonModule,
    InputGroupModule,
    ReactiveFormsModule,
    FormsModule,
    TabMenuModule,
    TransactionTableComponent
  ]
})
export class ShopModule { }
