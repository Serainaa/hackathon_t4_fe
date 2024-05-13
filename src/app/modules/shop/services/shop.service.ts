import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of, tap } from 'rxjs';
import { IShopAccountParams } from '../interfaces/shop-account-params.interface';
import { ITransaction } from '../../../shared/interfaces/transaction.interface';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  constructor(private httpClient: HttpClient) {}

  createShopAccount$(params: IShopAccountParams) {
    const link = 'http://localhost:3000/shops';
    return of(params);
    //return this.httpClient.post(link, params)
  }

  displayTransactions$(userId: string): Observable<ITransaction[]> {
    const link = 'http://localhost:3000/transactions';
    return this.httpClient.get<any>(link).pipe(map((res) => res.transactions));
  }
}
