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
  selector: 'app-payer-register',
  standalone: false,
  templateUrl: './payer-register.component.html',
  styleUrl: './payer-register.component.scss',
})
export class PayerRegisterComponent {
  private onDestroy$ = new Subject<boolean>();
  public profileForm: FormGroup;
  public fg: FormGroup;
  public readonly AccountType: typeof AccountType = AccountType;

  constructor(
    private formBuilder: FormBuilder,
    private payerService: PayerService,
    private router: Router
  ) {
    this.profileForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      username: [''],
      fiscalCode: [''],
      address: [''],
      birthdate: ['', [Validators.required]],
      iban: [''],
      bankName: [''],
      paypalUsername: [''],
      weeklyTransferLimit: [''],
      weeklyExpensesLimit: ['', Validators.required],
      password: ['', Validators.required],
      //accountType: [null, Validators.required]
    });
    this.fg = new FormGroup({
      accountType: new FormControl()
    });
    //private accountType: new FormControl(null, Validators.required);
  }

  ngOnInit(): void {
    this.listenToAccountTypeChange();
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
          localStorage.setItem("TOKEN", response.alternativeId)
        }),
        tap(() => this.router.navigate(['payer/transaction'])),
        take(1)
      )
      .subscribe();
  }

  changeAccountType(accountType: AccountType): void {
    this.fg.get('accountType')?.patchValue(accountType);
  }

  listenToAccountTypeChange(): void {
    this.fg
      .get('accountType')
      ?.valueChanges.pipe(
        tap((value) => {
          switch (value) {
            case 0:
              this.profileForm.get('iban')?.setValidators(Validators.required);
              this.profileForm
                .get('bankName')
                ?.setValidators(Validators.required);
              this.profileForm.get('paypalUsername')?.clearValidators();
              break;
            case 1:
              this.profileForm
                .get('paypalUsername')
                ?.setValidators(Validators.required);
              this.profileForm.get('iban')?.clearValidators();
              this.profileForm.get('bankName')?.clearValidators();
              break;
          }
          this.updateValidity();
        }),
        takeUntil(this.onDestroy$)
      )
      .subscribe();
  }

  updateValidity(): void {
    this.profileForm.get('paypalUsername')?.updateValueAndValidity();
    this.profileForm.get('iban')?.updateValueAndValidity();
    this.profileForm.get('bankName')?.updateValueAndValidity();
    this.profileForm.get('bankName')?.updateValueAndValidity();
  }
}
