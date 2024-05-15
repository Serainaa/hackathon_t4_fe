import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayerLogInComponent } from './payer-log-in.component';

describe('PayerSignUpComponent', () => {
  let component: PayerLogInComponent;
  let fixture: ComponentFixture<PayerLogInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayerLogInComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PayerLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
