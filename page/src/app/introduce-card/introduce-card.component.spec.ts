import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroduceCardComponent } from './introduce-card.component';

describe('IntroduceCardComponent', () => {
  let component: IntroduceCardComponent;
  let fixture: ComponentFixture<IntroduceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroduceCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroduceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
