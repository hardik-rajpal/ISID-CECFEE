import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallArticleBoxComponent } from './small-article-box.component';

describe('SmallArticleBoxComponent', () => {
  let component: SmallArticleBoxComponent;
  let fixture: ComponentFixture<SmallArticleBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallArticleBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallArticleBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
