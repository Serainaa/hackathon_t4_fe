import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShopRegisterComponent } from './shop-register/shop-register.component';
import { ShopContainerComponent } from './shop-container/shop-container.component';
import { ShopHistoryComponent } from './shop-history/shop-history.component';


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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
