import { Component, ViewChild, viewChild } from '@angular/core';
import { PayerService } from '../../services/payer.service';
import { PayerShopDropdownComponent } from '../payer-shop-dropdown/payer-shop-dropdown.component';
import { take, tap } from 'rxjs';

export interface ITransaction {
  sourceId: string | undefined;
  targetId: string | undefined;
  amount: number | undefined;
}

@Component({
  selector: 'app-payer-transaction',
  standalone: false,
  templateUrl: './payer-transaction.component.html',
  styleUrl: './payer-transaction.component.scss'
})
export class PayerTransactionComponent {
  
  amount: number | undefined;

  constructor(private payerService: PayerService) {
  }

  @ViewChild(PayerShopDropdownComponent) dropdown!: PayerShopDropdownComponent;

  sendPayment() {
    const params = {
      sourceId : "standard",
      targetId : this.dropdown.selectedShop?.shopId,
      amount : this.amount
    }

    this.payerService.sendNewTransaction(params).pipe(
      tap((res) => console.log(res)),
      take(1)
    ).subscribe()
  }

}
