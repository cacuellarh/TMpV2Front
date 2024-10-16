import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreThanOneProductComponent } from './more-than-one-product.component';

describe('MoreThanOneProductComponent', () => {
  let component: MoreThanOneProductComponent;
  let fixture: ComponentFixture<MoreThanOneProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoreThanOneProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreThanOneProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
