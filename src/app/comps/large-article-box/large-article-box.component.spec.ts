import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeArticleBoxComponent } from './large-article-box.component';

describe('LargeArticleBoxComponent', () => {
  let component: LargeArticleBoxComponent;
  let fixture: ComponentFixture<LargeArticleBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LargeArticleBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LargeArticleBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
