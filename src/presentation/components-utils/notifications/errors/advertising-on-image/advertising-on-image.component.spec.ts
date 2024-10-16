import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisingOnImageComponent } from './advertising-on-image.component';

describe('AdvertisingOnImageComponent', () => {
  let component: AdvertisingOnImageComponent;
  let fixture: ComponentFixture<AdvertisingOnImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvertisingOnImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvertisingOnImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
