import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivtableComponent } from './divtable.component';

describe('DivtableComponent', () => {
  let component: DivtableComponent;
  let fixture: ComponentFixture<DivtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivtableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
