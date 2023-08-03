import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariableSizeContentGridComponent } from './variable-size-content-grid.component';

describe('VariableSizeContentGridComponent', () => {
  let component: VariableSizeContentGridComponent;
  let fixture: ComponentFixture<VariableSizeContentGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VariableSizeContentGridComponent]
    });
    fixture = TestBed.createComponent(VariableSizeContentGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
