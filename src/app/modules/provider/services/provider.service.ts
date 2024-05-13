import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of, tap } from 'rxjs';
import { IProviderAccountParams } from '../interfaces/provider-account-params.interface';
import { ITransaction } from '../../../shared/interfaces/transaction.interface';

@Injectable({
  providedIn: 'root',
})
export class ProviderService {
  constructor(private httpClient: HttpClient) {}

  createProviderAccount$(params: IProviderAccountParams) {
    const link = 'http://localhost:3000/provider';
    return of(params);
    //return this.httpClient.post(link, params)
  }

  displayTransactions$(userId: string): Observable<ITransaction[]> {
    const link = 'http://localhost:3000/transactions';
    return this.httpClient.get<any>(link).pipe(map((res) => res.transactions));
  }
}