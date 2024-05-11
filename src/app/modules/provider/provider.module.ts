import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderRegisterComponent } from './provider-register/provider-register.component';
import { ProviderContainerComponent } from './provider-container/provider-container.component';
import { ProviderHistoryComponent } from './provider-history/provider-history.component';

import { ProviderRoutingModule } from './provider-routing.module';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputGroupModule } from 'primeng/inputgroup';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProviderRegisterComponent,
    ProviderContainerComponent,
    ProviderHistoryComponent
  ],
  imports: [
    CommonModule,
    ProviderRoutingModule,
    InputGroupAddonModule,
    InputGroupModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ProviderModule { }
