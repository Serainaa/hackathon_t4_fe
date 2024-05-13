import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderContainerComponent } from './provider-container.component';

describe('ProviderContainerComponent', () => {
  let component: ProviderContainerComponent;
  let fixture: ComponentFixture<ProviderContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProviderContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProviderContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
