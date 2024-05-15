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
  selector: 'app-provider-login',
  standalone: false,
  templateUrl: './provider-login.component.html',
  styleUrl: './provider-login.component.scss'
})
export class ProviderLoginComponent {

  public profileForm: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private providerService: ProviderService,
    private router: Router
  ) {
    this.profileForm = this.formBuilder.group({
      providerName: ['', Validators.required],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    this.providerService
      .logInProvider$(this.profileForm.value)
      .pipe(
        tap((response) => {
          console.log(response);
          localStorage.setItem("TOKEN", response.alternativeId)
        }),
        tap(() => this.router.navigate(['provider/history'])),
        take(1)
      )
      .subscribe();
  }


}
