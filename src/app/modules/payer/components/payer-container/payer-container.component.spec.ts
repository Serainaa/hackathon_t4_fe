import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayerContainerComponent } from './payer-container.component';

describe('PayerContainerComponent', () => {
  let component: PayerContainerComponent;
  let fixture: ComponentFixture<PayerContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayerContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PayerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
