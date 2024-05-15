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



@Component({
  selector: 'app-shop-register',
  standalone: false,
  templateUrl: './shop-register.component.html',
  styleUrl: './shop-register.component.scss'
})
export class ShopRegisterComponent {
  public profileForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private shopService: ShopService,
    private router: Router
  ) {
    this.profileForm = this.formBuilder.group({
      shopName: ['', Validators.required],
      password: ['', Validators.required],
      VATCode: ['', Validators.required ],
      address: [''],
      iban: ['', Validators.required],
      bankName: ['', Validators.required]
    });
  }

  onSubmit() {
    this.shopService
      .createShopAccount$(this.profileForm.value)
      .pipe(
        tap((response) => {
          console.log(response);
        }),
        tap(() => this.router.navigate(['shop/history'])),
        take(1)
      )
      .subscribe();
  }

}
