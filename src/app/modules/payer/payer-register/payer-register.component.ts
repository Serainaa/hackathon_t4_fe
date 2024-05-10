import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payer-register',
  standalone: false,
  templateUrl: './payer-register.component.html',
  styleUrl: './payer-register.component.scss'
})
export class PayerRegisterComponent {

  public profileForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.profileForm = this.formBuilder.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl(''),
      vatNumber: new FormControl('')
    });
  }

  onSubmit() {
    console.log(this.profileForm.value);
  }
}
