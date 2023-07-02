import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleboxComponent } from './articlebox.component';

describe('ArticleboxComponent', () => {
  let component: ArticleboxComponent;
  let fixture: ComponentFixture<ArticleboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
