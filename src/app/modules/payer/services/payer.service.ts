import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of, tap } from 'rxjs';
import { IPayerAccountParams } from '../interfaces/payer-account-params.interface';
import { IShop } from '../components/payer-shop-dropdown/payer-shop-dropdown.component';
import { ITransaction } from '../components/payer-transaction/payer-transaction.component';

@Injectable({
  providedIn: 'root',
})
export class PayerService {
  constructor(private httpClient: HttpClient) {}

  createPayerAccount(params: IPayerAccountParams) {
    const link = 'http://localhost:3000/template';
    return of(params);
    //return this.httpClient.post(link, params)
  }

  getShops$(): Observable<IShop[]> {
    const link = 'http://localhost:3000/shops';
    // return of(params)
    return this.httpClient.get<any>(link).pipe(
      map((res) => res.shops)
    );
  }

  sendNewTransaction(params: ITransaction) {
    const link = 'http://localhost:3000/payer/newtransaction';
    return of(params);
    //return this.httpClient.post(link, params)
  }
}
