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
    // const httpOptions = {
    //   headers: new HttpHeaders().set('content-type', 'application/json')
    //   .set('Access-Control-Allow-Origin', '*')
  //   const headers= new HttpHeaders()
  // .set('content-type', 'application/json')
  // .set('Access-Control-Allow-Origin', '*');
  const httpOptions = {
    headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin': '*' ,
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE"
    })
  };

    const link = 'http://localhost:8081/api/users';
    //return of(params);
    return this.httpClient.post(link, params, httpOptions)
  }

  logInPayer$(params: ITransactionParams) {
    const link = 'http://localhost:3000/payer/newtransaction';
    return of(params);
    //return this.httpClient.post(link, params)
  }
  getPayerProfile$(userId: string): Observable<IShop[]> {
    const link = 'http://localhost:3000/payer';
    // return of(params)
    return this.httpClient.get<any>(link).pipe(map((res) => res.IPayerAccountParams));
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
