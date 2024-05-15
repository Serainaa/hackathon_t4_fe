import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of, tap } from 'rxjs';
import { IPayerAccountParams } from '../interfaces/payer-account-params.interface';
import { IShop } from '../components/payer-shop-dropdown/payer-shop-dropdown.component';
import { ITransactionParams } from '../components/payer-transaction/payer-transaction.component';
import { ITransaction } from '../../../shared/interfaces/transaction.interface';
import { IPayerLogin } from '../interfaces/payer-login.interface';

@Injectable({
  providedIn: 'root',
})
export class PayerService {
  constructor(private httpClient: HttpClient) {}

  createPayerAccount$(params: IPayerAccountParams): Observable<any> {
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

  logInPayer$(params: IPayerLogin) {
    const link = 'http://localhost:8081';
    return of(params);
    //return this.httpClient.post(link, params)
  }

  getPayerProfile$(userId: string): Observable<IShop[]> {
    const link = 'http://localhost:8081/api/users/' + userId;
    // return of(params)
    return this.httpClient.get<any>(link).pipe(map((res) => res.IPayerAccountParams));
  }

  getShops$(): Observable<IShop[]> {
    const link = 'http://localhost:8081/api/shop';
    //return of(params)
    return this.httpClient.get<any>(link).pipe(map((res) => res.shops));
  }

  sendNewTransaction$(params: ITransactionParams) {
    const link = 'http://localhost:8081/api/transactions';
    //return of(params);
    return this.httpClient.post(link, params)
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
    const link = 'http://localhost:8081/api/transactions/' + localStorage.getItem("TOKEN");
    console.log(link)
    return this.httpClient.get<any>(link);

  }
}
