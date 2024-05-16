import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of, tap } from 'rxjs';
import { IShopAccountParams } from '../interfaces/shop-account-params.interface';
import { ITransaction } from '../../../shared/interfaces/transaction.interface';
import { IShopLogin } from '../interfaces/shop-login.interface';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  constructor(private httpClient: HttpClient) {}

  
  createShopAccount$(params: IShopAccountParams) {
    const link = 'http://localhost:8081/api/shop';
    //return of(params);
    return this.httpClient.post(link, params)
  }

  displayTransactions$(shopId: string): Observable<ITransaction[]> {
    const link = 'http://localhost:8081/api/shop/transactions/' + localStorage.getItem("TOKEN");
    return this.httpClient.get<any>(link)
    //.pipe(map((res) => res.transactions));
  }

  editShopAccount$(params: IShopAccountParams) {
    const link = 'http://localhost:3000/shops';
    return of(params);
    //return this.httpClient.put(link, params)
  }

  logInShop$(params: IShopLogin) {
    const link = 'http://localhost:8081';
    return of(params);
    //return this.httpClient.post(link, params)
  }
}
