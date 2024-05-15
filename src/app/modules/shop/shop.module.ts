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
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { ShopLoginComponent } from './components/shop-login/shop-login.component';

@NgModule({
  declarations: [
    ShopRegisterComponent,
    ShopContainerComponent,
    ShopHistoryComponent,
    ShopLoginComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    InputGroupAddonModule,
    InputGroupModule,
    ReactiveFormsModule,
    FormsModule,
    TabMenuModule,
    TransactionTableComponent,
    ButtonModule,
    InputNumberModule,
    InputTextModule,
    PasswordModule
  ]
})
export class ShopModule { }
