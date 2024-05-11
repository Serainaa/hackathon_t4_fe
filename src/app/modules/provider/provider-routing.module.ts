import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProviderRegisterComponent } from './provider-register/provider-register.component';
import { ProviderContainerComponent } from './provider-container/provider-container.component';
import { ProviderHistoryComponent } from './provider-history/provider-history.component';


const routes: Routes = [
  { path: 'register', component: ProviderRegisterComponent },
  {
    path: '',
    component: ProviderContainerComponent,
    children: [
      { path: 'history', component: ProviderHistoryComponent },
      { path: 'profile', component: ProviderRegisterComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProviderRoutingModule {}
