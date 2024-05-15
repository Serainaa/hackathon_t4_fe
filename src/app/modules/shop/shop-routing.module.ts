import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShopRegisterComponent } from './components/shop-register/shop-register.component';
import { ShopContainerComponent } from './components/shop-container/shop-container.component';
import { ShopHistoryComponent } from './components/shop-history/shop-history.component';
import { routeGuardGuard } from '../../shared/guards/route-guard.guard';
import { ShopLoginComponent } from './components/shop-login/shop-login.component';


const routes: Routes = [
  { path: 'register', component: ShopRegisterComponent },
  { path: 'login', component: ShopLoginComponent },
  {
    path: '',
    canActivate: [routeGuardGuard],
    component: ShopContainerComponent,
    children: [
      { path: 'history', component: ShopHistoryComponent },
      { path: 'profile', component: ShopRegisterComponent },
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
export class ShopRoutingModule {}
