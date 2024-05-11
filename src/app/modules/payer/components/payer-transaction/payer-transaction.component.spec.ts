import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayerTransactionComponent } from './payer-transaction.component';

describe('PayerTransactionComponent', () => {
  let component: PayerTransactionComponent;
  let fixture: ComponentFixture<PayerTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayerTransactionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PayerTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
