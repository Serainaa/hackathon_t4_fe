import { AccountType } from "../components/payer-register/payer-register.component";

export interface IPayerAccountParams {
    fullName: string,
    userame: string,
    fiscalCode: string,
    birthdate: Date,
    address: string,
    iban: string,
    bankName: string,
    paypalUsername: string,
    weeklyTransferLimit: number,
    weeklyExpensesLimit: number,
    password: String
    //accountType: AccountType
}
