import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeminarsPageComponent } from './seminars-page.component';

describe('SeminarsPageComponent', () => {
  let component: SeminarsPageComponent;
  let fixture: ComponentFixture<SeminarsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeminarsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeminarsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
