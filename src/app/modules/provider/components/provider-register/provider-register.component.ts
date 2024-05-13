import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { take, tap } from 'rxjs';
import { ProviderService } from '../../services/provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-provider-register',
  standalone: false,
  templateUrl: './provider-register.component.html',
  styleUrl: './provider-register.component.scss'
})
export class ProviderRegisterComponent {
  public profileForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private providerService: ProviderService,
    private router: Router
  ) {
    this.profileForm = this.formBuilder.group({
      companyName: ['', Validators.required],
      VATCode: ['', Validators.required ],
      fiscalAddress: [''],
      iban: ['', Validators.required],
      bankName: ['', Validators.required]
    });
  }

  onSubmit() {
    this.providerService
      .createProviderAccount$(this.profileForm.value)
      .pipe(
        tap((response) => {
          console.log(response);
        }),
        tap(() => this.router.navigate(['provider/history'])),
        take(1)
      )
      .subscribe();
  }
}
