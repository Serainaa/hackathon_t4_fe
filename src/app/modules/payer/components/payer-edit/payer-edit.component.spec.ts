import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayerEditComponent } from './payer-edit.component';

describe('PayerEditComponent', () => {
  let component: PayerEditComponent;
  let fixture: ComponentFixture<PayerEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayerEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PayerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
