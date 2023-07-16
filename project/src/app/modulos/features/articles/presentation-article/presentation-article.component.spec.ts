import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationArticleComponent } from './presentation-article.component';

describe('PresentationArticleComponent', () => {
  let component: PresentationArticleComponent;
  let fixture: ComponentFixture<PresentationArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PresentationArticleComponent]
    });
    fixture = TestBed.createComponent(PresentationArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
