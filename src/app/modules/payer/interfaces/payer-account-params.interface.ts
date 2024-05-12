import { AccountType } from "../components/payer-register/payer-register.component";

export interface IPayerAccountParams {
    firstName: string,
    lastName: string,
    fiscalCode: string,
    address: string,
    birthday: Date,
    iban: string,
    bankName: string,
    paypalUsername: string,
    weeklyTransferLimit: number,
    weeklyExpensesLimit: number,
    accountType: AccountType
}
