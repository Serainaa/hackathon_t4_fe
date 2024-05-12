import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ITransaction } from '../../interfaces/transaction.interface';

@Component({
  selector: 'app-transaction-table',
  standalone: true,
  imports: [TableModule, CommonModule],
  templateUrl: './transaction-table.component.html',
  styleUrl: './transaction-table.component.scss',
})
export class TransactionTableComponent {
  @Input() transactionData: ITransaction[] =[]

  public fieldNames: {
    name: string,
    id: string
  }[]


  public columnNamePrettier: Record<string, string> = {
    date: 'Date',
    sourceName: 'Source Name',
    targetName: 'Target Name',
    amount: 'Amount',
  };

  ngOnInit(): void {
    console.log(this.transactionData)
    this.fieldNames = Object.keys(this.transactionData[0])?.map((key) => {
      return {
        name: this.columnNamePrettier[key],
        id: key
      }
    })
  }
}