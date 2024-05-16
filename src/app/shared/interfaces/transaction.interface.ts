export interface ITransaction {
    transactionId?: string | undefined;
    date: Date | undefined;
    userName?: string | undefined;
    shopName?: string | undefined;
    amount: number | undefined;
    fee?: number | undefined;
    cashBack?: number | undefined;
  }