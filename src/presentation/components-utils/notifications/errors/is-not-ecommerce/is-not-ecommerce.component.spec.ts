import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsNotEcommerceComponent } from './is-not-ecommerce.component';

describe('IsNotEcommerceComponent', () => {
  let component: IsNotEcommerceComponent;
  let fixture: ComponentFixture<IsNotEcommerceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IsNotEcommerceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IsNotEcommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
