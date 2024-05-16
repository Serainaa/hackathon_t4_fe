import { Component } from '@angular/core';
import { ProviderService } from '../../services/provider.service';
import { Observable } from 'rxjs';
import { ITransaction } from '../../../../shared/interfaces/transaction.interface';

@Component({
  selector: 'app-provider-history',
  standalone: false,
  templateUrl: './provider-history.component.html',
  styleUrl: './provider-history.component.scss'
})
export class ProviderHistoryComponent {

  history$: Observable<ITransaction[]>;

  constructor(private providerService: ProviderService) {
    this.history$ = this.providerService.displayTransactions$()
  }
}
