import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfotileGridBoxComponent } from './infotile-grid-box.component';

describe('InfotileGridBoxComponent', () => {
  let component: InfotileGridBoxComponent;
  let fixture: ComponentFixture<InfotileGridBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfotileGridBoxComponent]
    });
    fixture = TestBed.createComponent(InfotileGridBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
