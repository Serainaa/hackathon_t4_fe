import { AccountType } from "../components/payer-register/payer-register.component";

export interface IPayerAccountParams {
    firstName: string,
    lastName: string,
    fiscalCode: string,
    birthday: Date,
    address: string,
    iban: string,
    bankName: string,
    paypalUsername: string,
    weeklyTransferLimit: number,
    weeklyExpensesLimit: number,
    accountType: AccountType
}
