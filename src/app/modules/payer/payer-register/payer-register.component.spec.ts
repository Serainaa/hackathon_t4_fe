import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayerRegisterComponent } from './payer-register.component';

describe('PayerRegisterComponent', () => {
  let component: PayerRegisterComponent;
  let fixture: ComponentFixture<PayerRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayerRegisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PayerRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
