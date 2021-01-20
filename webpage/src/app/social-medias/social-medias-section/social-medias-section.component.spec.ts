import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediasSectionComponent } from './social-medias-section.component';

describe('SocialMediasSectionComponent', () => {
  let component: SocialMediasSectionComponent;
  let fixture: ComponentFixture<SocialMediasSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialMediasSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialMediasSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When call someone method should be return a url', () => {
    describe('when call icons methods', () => {
      it('when call iconFacebook', () => {
        fixture = TestBed.createComponent(SocialMediasSectionComponent);
        component = fixture.componentInstance;
        expect(component.iconFacebook()).toBe('https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io-page/dev/webpage/src/assets/social-media/facebook.png');
      });

      it('when call iconTwitter', () => {
        fixture = TestBed.createComponent(SocialMediasSectionComponent);
        component = fixture.componentInstance;
        expect(component.iconTwitter()).toBe('https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io-page/dev/webpage/src/assets/social-media/twitter.png');
      });

      it('when call iconInstagram', () => {
        fixture = TestBed.createComponent(SocialMediasSectionComponent);
        component = fixture.componentInstance;
        expect(component.iconInstagram()).toBe('https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io-page/dev/webpage/src/assets/social-media/instagram.png');
      });

      it('when call iconLinkedin', () => {
        fixture = TestBed.createComponent(SocialMediasSectionComponent);
        component = fixture.componentInstance;
        expect(component.iconLinkedin()).toBe('https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io-page/dev/webpage/src/assets/social-media/linkedin.png');
      });

      it('when call iconGithub', () => {
        fixture = TestBed.createComponent(SocialMediasSectionComponent);
        component = fixture.componentInstance;
        expect(component.iconGithub()).toBe('https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io-page/dev/webpage/src/assets/social-media/github.png');
      });
    });

    describe('When call link social medias', () => {
      it('when call LinkFacebook', () => {
        fixture = TestBed.createComponent(SocialMediasSectionComponent);
        component = fixture.componentInstance;
        expect(component.linkFacebook()).toBe('https://www.facebook.com/LuccasTraumer');
      });

      it('when call LinkTwitter', () => {
        fixture = TestBed.createComponent(SocialMediasSectionComponent);
        component = fixture.componentInstance;
        expect(component.linkTwitter()).toBe('https://twitter.com/LuccasTraumer');
      });

      it('when call LinkInstagram', () => {
        fixture = TestBed.createComponent(SocialMediasSectionComponent);
        component = fixture.componentInstance;
        expect(component.linkInstagram()).toBe('https://www.instagram.com/luccastraumer/');
      });

      it('when call linkGithub', () => {
        fixture = TestBed.createComponent(SocialMediasSectionComponent);
        component = fixture.componentInstance;
        expect(component.linkGithub()).toBe('https://github.com/LuccasTraumer');
      });

      it('when call LinkLinkedin', () => {
        fixture = TestBed.createComponent(SocialMediasSectionComponent);
        component = fixture.componentInstance;
        expect(component.linkLinkedin()).toBe('https://www.linkedin.com/in/luccastraumer/');
      });
    });
  });
});
