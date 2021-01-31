import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSectionComponent } from './about-section.component';

describe('AboutSectionComponent', () => {
  let component: AboutSectionComponent;
  let fixture: ComponentFixture<AboutSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSectionComponent);
    component = fixture.componentInstance;
    const app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('when call getIconInfo() should be url', () => {
    fixture = TestBed.createComponent(AboutSectionComponent);
    component = fixture.componentInstance;
    const about = fixture.componentInstance;
    expect(about.getIconInfo()).toEqual('https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io-page/2a1c89fad1e8a4710cb38c81fce09747de9bc986/webpage/src/assets/info.svg');
  });
});
