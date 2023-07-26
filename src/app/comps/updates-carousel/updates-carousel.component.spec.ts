import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesCarouselComponent } from './updates-carousel.component';

describe('UpdatesCarouselComponent', () => {
  let component: UpdatesCarouselComponent;
  let fixture: ComponentFixture<UpdatesCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatesCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatesCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
