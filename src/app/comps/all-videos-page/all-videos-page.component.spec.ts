import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllVideosPageComponent } from './all-videos-page.component';

describe('AllVideosPageComponent', () => {
  let component: AllVideosPageComponent;
  let fixture: ComponentFixture<AllVideosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllVideosPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllVideosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
