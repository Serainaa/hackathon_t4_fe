import { Component } from '@angular/core';
import { PayerService } from '../../services/payer.service';
import { Observable } from 'rxjs';
import { ITransaction } from '../../../../shared/interfaces/transaction.interface';


@Component({
  selector: 'app-payer-history',
  standalone: false,
  templateUrl: './payer-history.component.html',
  styleUrl: './payer-history.component.scss'
})
export class PayerHistoryComponent {

  history$: Observable<ITransaction[]>;

  constructor(private payerService: PayerService) {
    this.history$ = this.payerService.displayTransactions$("")
  }

}
