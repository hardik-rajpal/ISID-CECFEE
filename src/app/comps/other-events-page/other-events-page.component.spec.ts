import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherEventsPageComponent } from './other-events-page.component';

describe('OtherEventsPageComponent', () => {
  let component: OtherEventsPageComponent;
  let fixture: ComponentFixture<OtherEventsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherEventsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherEventsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
