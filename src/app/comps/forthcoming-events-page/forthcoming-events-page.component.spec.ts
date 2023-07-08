import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForthcomingEventsPageComponent } from './forthcoming-events-page.component';

describe('ForthcomingEventsPageComponent', () => {
  let component: ForthcomingEventsPageComponent;
  let fixture: ComponentFixture<ForthcomingEventsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForthcomingEventsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForthcomingEventsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
