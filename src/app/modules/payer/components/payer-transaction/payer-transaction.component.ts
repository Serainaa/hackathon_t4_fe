import { Component, ViewChild, viewChild } from '@angular/core';
import { PayerService } from '../../services/payer.service';
import { PayerShopDropdownComponent } from '../payer-shop-dropdown/payer-shop-dropdown.component';
import { catchError, take, tap } from 'rxjs';
import { MessageService } from 'primeng/api';

export interface ITransactionParams {
  payerAlternativeId: string | undefined;
  shopAlternativeId: string | undefined;
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

  constructor(private payerService: PayerService, private messageService: MessageService) {
  }

  @ViewChild(PayerShopDropdownComponent) dropdown!: PayerShopDropdownComponent;

  sendPayment() {
    const params = {
      payerAlternativeId : localStorage.getItem("TOKEN"),
      shopAlternativeId : this.dropdown.selectedShop?.alternativeId,
      amount : this.amount
    }

    this.payerService.sendNewTransaction$(params).pipe(
      tap((res) => console.log(res)),
      tap(() => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Payment successfully sent!' });
      }),
      catchError((err) => {
        this.messageService.add({ severity: 'error', summary: 'error', detail: 'Payment rejected!' });
        throw err;
      }),
      take(1)
    ).subscribe()
  }

}
