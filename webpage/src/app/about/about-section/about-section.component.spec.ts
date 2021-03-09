import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AboutSectionComponent } from './about-section.component';

const linkInfo = 'https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io-page/2a1c89fad1e8a4710cb38c81fce09747de9bc986/webpage/src/assets/info.svg';

describe('About Section Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AboutSectionComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AboutSectionComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
