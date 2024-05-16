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
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-provider-register',
  standalone: false,
  templateUrl: './provider-register.component.html',
  styleUrl: './provider-register.component.scss'
})
export class ProviderRegisterComponent {
  public profileForm: FormGroup;
  public mode: 'register' | 'edit';

  constructor(
    private formBuilder: FormBuilder,
    private providerService: ProviderService,
    private router: Router,
    private messageService: MessageService
  ) {
    this.mode = localStorage.getItem('TOKEN') ? 'edit' : 'register';
    this.profileForm = this.formBuilder.group({
      companyName: ['', Validators.required],
      VATCode: ['', Validators.required ],
      fiscalAddress: [''],
      iban: ['', Validators.required],
      bankName: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    if (this.mode === 'edit') {
      this.providerService
        .getProviderProfile$(localStorage.getItem('TOKEN'))
        .pipe(
          tap((user) => {
            this.fillForm(user);
          }),
          take(1)
        )
        .subscribe();
    }
  }

  onSubmit() {
    if (this.mode === "register") {
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
    } else {
      this.providerService.updateProvider$(this.profileForm.value)
      .pipe(
        tap((response) => {
         this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Profile edited successfully!' });

        }),
        take(1)
      )
      .subscribe();
    }
  }
  fillForm(user: any): void {
    this.profileForm.patchValue(user);
  }
}
