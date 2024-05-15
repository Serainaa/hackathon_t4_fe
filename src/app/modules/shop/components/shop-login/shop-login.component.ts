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

@Component({
  selector: 'app-shop-login',
  standalone: false,
  templateUrl: './shop-login.component.html',
  styleUrl: './shop-login.component.scss'
})
export class ShopLoginComponent {

    public profileForm: FormGroup;
  
    constructor(
      private formBuilder: FormBuilder,
      private shopService: ShopService,
      private router: Router
    ) {
      this.profileForm = this.formBuilder.group({
        shopName: ['', Validators.required],
        password: ['', [Validators.required]]
      });
    }
  
    onSubmit() {
      this.shopService
        .logInShop$(this.profileForm.value)
        .pipe(
          tap((response) => {
            console.log(response);
            localStorage.setItem("TOKEN", response.alternativeId)
          }),
          tap(() => this.router.navigate(['shop/history'])),
          take(1)
        )
        .subscribe();
    }
  
}
