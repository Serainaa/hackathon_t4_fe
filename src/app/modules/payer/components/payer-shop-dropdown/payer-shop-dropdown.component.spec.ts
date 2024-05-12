import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayerShopDropdownComponent } from './payer-shop-dropdown.component';

describe('PayerShopDropdownComponent', () => {
  let component: PayerShopDropdownComponent;
  let fixture: ComponentFixture<PayerShopDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayerShopDropdownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PayerShopDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
