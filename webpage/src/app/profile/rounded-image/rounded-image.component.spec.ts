import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundedImageComponent } from './rounded-image.component';

describe('RoundedImageComponent', () => {
  let component: RoundedImageComponent;
  let fixture: ComponentFixture<RoundedImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundedImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundedImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('when call personalImage should be return a url', () => {
    fixture = TestBed.createComponent(RoundedImageComponent);
    component = fixture.componentInstance;
    expect(component.personalImage()).toBe('https://avatars3.githubusercontent.com/u/16438051?s=400&u=fa0224315b18ada8435edf9ee06f2022f726bb6f&v=4');
  });
});
