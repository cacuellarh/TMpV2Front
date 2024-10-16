import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricelessProductComponent } from './priceless-product.component';

describe('PricelessProductComponent', () => {
  let component: PricelessProductComponent;
  let fixture: ComponentFixture<PricelessProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricelessProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricelessProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
