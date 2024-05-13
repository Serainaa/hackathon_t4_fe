import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProviderRegisterComponent } from './components/provider-register/provider-register.component';
import { ProviderContainerComponent } from './components/provider-container/provider-container.component';
import { ProviderHistoryComponent } from './components/provider-history/provider-history.component';


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
  {
    path: '',
    redirectTo: "transaction",
    pathMatch: 'full'

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProviderRoutingModule {}
