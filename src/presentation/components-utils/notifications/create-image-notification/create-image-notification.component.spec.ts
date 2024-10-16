import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateImageNotificationComponent } from './create-image-notification.component';

describe('CreateImageNotificationComponent', () => {
  let component: CreateImageNotificationComponent;
  let fixture: ComponentFixture<CreateImageNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateImageNotificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateImageNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
