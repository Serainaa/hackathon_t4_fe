import { Component } from '@angular/core';
import { ShopService } from '../../services/shop.service';
import { Observable } from 'rxjs';
import { ITransaction } from '../../../../shared/interfaces/transaction.interface';

@Component({
  selector: 'app-shop-history',
  standalone: false,
  templateUrl: './shop-history.component.html',
  styleUrl: './shop-history.component.scss'
})
export class ShopHistoryComponent {


  history$: Observable<ITransaction[]>;

  constructor(private shopService: ShopService) {
    this.history$ = this.shopService.displayTransactions$("")
  }

}
