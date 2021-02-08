import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSectionComponent } from './contact-section.component';

describe('ContactSectionComponent', () => {
  let component: ContactSectionComponent;
  let fixture: ComponentFixture<ContactSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When he get Constantes', () => {
    it('When he get background image url', () => {
      fixture = TestBed.createComponent(ContactSectionComponent);
      component = fixture.componentInstance;
      expect(component.getBackgroundImage).toBe('https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io/dev/webpage/src/assets/contact_bg.png');
    });

    it('When get contact icon should be return url', () => {
      fixture = TestBed.createComponent(ContactSectionComponent);
      component = fixture.componentInstance;
      expect(component.getIconContact).toBe('https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io/7da0a0e6816fcffc3e0a9db8932b8b3606b505cb/webpage/src/assets/icons/email-2537244.svg');
    });
  });
});
