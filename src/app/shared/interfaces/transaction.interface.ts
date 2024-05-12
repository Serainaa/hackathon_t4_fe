export interface ITransaction {
    transactionId?: string | undefined;
    date: Date | undefined;
    sourceName?: string | undefined;
    targetName?: string | undefined;
    amount: number | undefined;
  }