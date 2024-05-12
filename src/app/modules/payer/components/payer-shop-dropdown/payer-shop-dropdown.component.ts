import { Component } from '@angular/core';
import { PayerService } from '../../services/payer.service';
import { Observable, catchError, pluck, tap } from 'rxjs';

export interface IShop {
  shopId: string;
  shopName: string;
}

@Component({
  selector: 'app-payer-shop-dropdown',
  standalone: false,
  templateUrl: './payer-shop-dropdown.component.html',
  styleUrl: './payer-shop-dropdown.component.scss',
})
export class PayerShopDropdownComponent {
  shops: IShop[] | undefined;
  selectedShop: IShop | undefined;
  shops$: Observable<IShop[]>;

  constructor(private payerService: PayerService) {
    this.shops$ = this.payerService.getShops$()
  }

  ngOnInit() {
    // this.shops = [
    //     { shopName: 'New York' },
    //     { shopName: 'Rome' }
    // ];
  }
}
