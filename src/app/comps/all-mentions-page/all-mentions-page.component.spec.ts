import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMentionsPageComponent } from './all-mentions-page.component';

describe('AllMentionsPageComponent', () => {
  let component: AllMentionsPageComponent;
  let fixture: ComponentFixture<AllMentionsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllMentionsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllMentionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
