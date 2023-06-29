import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageDumpComponent } from './image-dump.component';

describe('ImageDumpComponent', () => {
  let component: ImageDumpComponent;
  let fixture: ComponentFixture<ImageDumpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageDumpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageDumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
