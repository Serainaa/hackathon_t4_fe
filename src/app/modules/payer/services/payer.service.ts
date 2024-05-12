import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of, tap } from 'rxjs';
import { IPayerAccountParams } from '../interfaces/payer-account-params.interface';
import { IShop } from '../components/payer-shop-dropdown/payer-shop-dropdown.component';
import { ITransactionParams } from '../components/payer-transaction/payer-transaction.component';
import { ITransaction } from '../../../shared/interfaces/transaction.interface';

@Injectable({
  providedIn: 'root',
})
export class PayerService {
  constructor(private httpClient: HttpClient) {}

  createPayerAccount$(params: IPayerAccountParams) {
    const link = 'http://localhost:3000/template';
    return of(params);
    //return this.httpClient.post(link, params)
  }

  getShops$(): Observable<IShop[]> {
    const link = 'http://localhost:3000/shops';
    // return of(params)
    return this.httpClient.get<any>(link).pipe(map((res) => res.shops));
  }

  sendNewTransaction$(params: ITransactionParams) {
    const link = 'http://localhost:3000/payer/newtransaction';
    return of(params);
    //return this.httpClient.post(link, params)
  }

  displayTransactions$(userId: string): Observable<ITransaction[]> {
    // const params: ITransaction[] = [
    //   {
    //     date: new Date(''),
    //     sourceName: '',
    //     amount: 2,
    //   },
    //   {
    //     date: new Date(''),
    //     sourceName: '',
    //     amount: 2,
    //   },
    // ];
    const link = 'http://localhost:3000/transactions';
    return this.httpClient.get<any>(link).pipe(map((res) => res.transactions));

  }
}
