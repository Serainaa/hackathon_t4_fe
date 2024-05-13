import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopHistoryComponent } from './shop-history.component';

describe('ShopHistoryComponent', () => {
  let component: ShopHistoryComponent;
  let fixture: ComponentFixture<ShopHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopHistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShopHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
