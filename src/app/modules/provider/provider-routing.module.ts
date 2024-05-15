import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProviderRegisterComponent } from './components/provider-register/provider-register.component';
import { ProviderContainerComponent } from './components/provider-container/provider-container.component';
import { ProviderHistoryComponent } from './components/provider-history/provider-history.component';
import { routeGuardGuard } from '../../shared/guards/route-guard.guard';
import { ProviderLoginComponent } from './components/provider-login/provider-login.component';


const routes: Routes = [
  { path: 'register', component: ProviderRegisterComponent },
  { path: 'login', component: ProviderLoginComponent },
  {
    path: '',
    component: ProviderContainerComponent,
    canActivate: [routeGuardGuard],
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
