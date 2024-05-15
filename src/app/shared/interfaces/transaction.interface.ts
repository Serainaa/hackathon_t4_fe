export interface ITransaction {
    transactionId?: string | undefined;
    date: Date | undefined;
    sourceName?: string | undefined;
    shopName?: string | undefined;
    amount: number | undefined;
  }