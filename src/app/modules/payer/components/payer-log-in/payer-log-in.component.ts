import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { take, tap } from 'rxjs';
import { PayerService } from '../../services/payer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payer-log-in',
  standalone: false,
  templateUrl: './payer-log-in.component.html',
  styleUrl: './payer-log-in.component.scss'
})
export class PayerLogInComponent {
  public profileForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private payerService: PayerService,
    private router: Router
  ) {
    this.profileForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    this.payerService
      .logInPayer$(this.profileForm.value)
      .pipe(
        tap((response) => {
          console.log(response);
          localStorage.setItem("TOKEN", "	fb9c72e9-0ad2-4e05-acd8-4b4a22c7c4f2")
        }),
        tap(() => this.router.navigate(['payer/transaction'])),
        take(1)
      )
      .subscribe();
  }

}
