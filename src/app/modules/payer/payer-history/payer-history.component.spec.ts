import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayerHistoryComponent } from './payer-history.component';

describe('PayerHistoryComponent', () => {
  let component: PayerHistoryComponent;
  let fixture: ComponentFixture<PayerHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayerHistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PayerHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
