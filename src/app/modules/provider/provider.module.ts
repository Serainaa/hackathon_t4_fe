import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderRegisterComponent } from './components/provider-register/provider-register.component';
import { ProviderContainerComponent } from './components/provider-container/provider-container.component';
import { ProviderHistoryComponent } from './components/provider-history/provider-history.component';

import { ProviderRoutingModule } from './provider-routing.module';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputGroupModule } from 'primeng/inputgroup';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabMenuModule } from 'primeng/tabmenu';
import { TransactionTableComponent } from '../../shared/components/transaction-table/transaction-table.component';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ProviderLoginComponent } from './components/provider-login/provider-login.component';


@NgModule({
  declarations: [
    ProviderRegisterComponent,
    ProviderContainerComponent,
    ProviderHistoryComponent,
    ProviderLoginComponent
  ],
  imports: [
    CommonModule,
    ProviderRoutingModule,
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
export class ProviderModule { }
