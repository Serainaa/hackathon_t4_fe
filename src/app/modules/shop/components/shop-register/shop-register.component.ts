import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { take, tap } from 'rxjs';
import { ShopService } from '../../services/shop.service';
import { Router } from '@angular/router';
import { Password } from 'primeng/password';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-shop-register',
  standalone: false,
  templateUrl: './shop-register.component.html',
  styleUrl: './shop-register.component.scss'
})
export class ShopRegisterComponent {
  public profileForm: FormGroup;
  public mode: 'register' | 'edit';

  constructor(
    private formBuilder: FormBuilder,
    private shopService: ShopService,
    private router: Router,
    //private messageService: MessageService
  ) {
    this.profileForm = this.formBuilder.group({
      shopName: ['', Validators.required],
      password: ['', Validators.required],
      vatCode: ['', Validators.required ],
      shopAddress: [''],
      bankAccount: ['', Validators.required],
      bankName: ['', Validators.required]
    });
  }

  onSubmit() {
    this.shopService
      .createShopAccount$(this.profileForm.value)
      .pipe(
        tap((response) => {
          console.log(response);
          localStorage.setItem('TOKEN', response.alternativeId);
        }),
        tap(() => this.router.navigate(['shop/history'])),
        take(1)
      )
      .subscribe();
  }

}
