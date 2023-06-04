import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersontileComponent } from './persontile.component';

describe('PersontileComponent', () => {
  let component: PersontileComponent;
  let fixture: ComponentFixture<PersontileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersontileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersontileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
