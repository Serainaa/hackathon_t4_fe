import { Component, Type } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Observable, Subject, take, takeUntil, tap } from 'rxjs';
import { PayerService } from '../../services/payer.service';
import { Router } from '@angular/router';


export enum AccountType {
  BANK = 0,
  PAYPAL = 1,
}

@Component({
  selector: 'app-payer-edit',
  standalone: false,
  templateUrl: './payer-edit.component.html',
  styleUrl: './payer-edit.component.scss'
})
export class PayerEditComponent {
  public readonly AccountType: typeof AccountType = AccountType;
  private onDestroy$ = new Subject<boolean>();
  public profileForm: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private payerService: PayerService,
    private router: Router
  ) {
    this.payerService.getPayerProfile$("")
    this.profileForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: [''],
      fiscalCode: [''],
      address: [''],
      birthday: ['', [Validators.required]],
      iban: [''],
      bankName: [''],
      paypalUsername: [''],
      weeklyTransferLimit: [''],
      weeklyExpensesLimit: ['', Validators.required],
      accountType: [null, Validators.required],
    });
  }


  ngOnDestroy(): void {
    this.onDestroy$.next(true);
  }

  onSubmit() {
    this.payerService
      .createPayerAccount$(this.profileForm.value)
      .pipe(
        tap((response) => {
          console.log(response);
        }),
        tap(() => this.router.navigate(['payer/transaction'],{state: this.profileForm.getRawValue})),
        take(1)
      )
      .subscribe();
  }

  changeAccountType(accountType: AccountType): void {
    this.profileForm.get('accountType')?.patchValue(accountType);
  }
}
