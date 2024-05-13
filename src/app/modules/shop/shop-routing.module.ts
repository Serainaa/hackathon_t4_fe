import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShopRegisterComponent } from './components/shop-register/shop-register.component';
import { ShopContainerComponent } from './components/shop-container/shop-container.component';
import { ShopHistoryComponent } from './components/shop-history/shop-history.component';


const routes: Routes = [
  { path: 'register', component: ShopRegisterComponent },
  {
    path: '',
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
