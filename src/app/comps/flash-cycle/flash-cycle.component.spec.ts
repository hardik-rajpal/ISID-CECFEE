import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashCycleComponent } from './flash-cycle.component';

describe('FlashCycleComponent', () => {
  let component: FlashCycleComponent;
  let fixture: ComponentFixture<FlashCycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlashCycleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlashCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
