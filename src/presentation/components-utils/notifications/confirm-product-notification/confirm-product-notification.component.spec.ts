import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmProductNotificationComponent } from './confirm-product-notification.component';

describe('ConfirmProductNotificationComponent', () => {
  let component: ConfirmProductNotificationComponent;
  let fixture: ComponentFixture<ConfirmProductNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmProductNotificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmProductNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
