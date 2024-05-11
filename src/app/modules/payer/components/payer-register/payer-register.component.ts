import { Component, Type } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Subject, takeUntil, tap } from 'rxjs';

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
  public readonly AccountType: typeof AccountType = AccountType

  constructor(private formBuilder: FormBuilder) {
    this.profileForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: [''],
      fiscalCode: [''],
      address: [''],
      birthday: ['', [Validators.required, this.validateDate]],
      iban: [''],
      bankName: [''],
      paypalUsername: [''],
      weeklyTransferLimit: [''],
      weeklyExpensesLimit: ['', Validators.required],
      accountType: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.listenToAccountTypeChange();
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
  }

  validateDate(control: any) {
    const selectedDate = new Date(control.value);
    const currentDate = new Date();
    if (selectedDate > currentDate) {
      return { futureDate: true };
    }
    return null;
  }

  requiredIfPaypalSelected(control: FormControl): ValidationErrors | null {
    if (
      this.profileForm.get('accountType')?.value === AccountType.PAYPAL &&
      !control.value
    ) {
      return { required: true };
    }
    return null;
  }

  onSubmit() {
    console.log(this.profileForm.value);
  }

  changeAccountType(accountType: AccountType): void {
    this.profileForm.get('accountType')?.patchValue(accountType);
  }

  listenToAccountTypeChange(): void {
    this.profileForm
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
