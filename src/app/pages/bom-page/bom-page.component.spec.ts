import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BomPageComponent } from './bom-page.component';

describe('BomPageComponent', () => {
  let component: BomPageComponent;
  let fixture: ComponentFixture<BomPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BomPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BomPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
