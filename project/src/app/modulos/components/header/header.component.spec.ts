import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import {RouterTestingModule} from "@angular/router/testing";
import {Router} from "@angular/router";

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ HeaderComponent ]
    })
    .compileComponents();

    router = TestBed.inject(Router);

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('When method isMenuOpen then return with sucess', () => {
    expect(component.isMenuMobileOpen).toBeFalsy();
  });

  it('when method closeMenu was called then works with success', () => {
    component.closeMenu();
  });

  it('when method goToHome was called then works with success', () => {
    jest.spyOn(component, 'closeMenu');
    jest.spyOn(router, 'navigate');
    component.goToHome();

    expect(router.navigate).toBeCalledTimes(1);
    expect(component.closeMenu).toBeCalledTimes(1);
  });

  it('when method goToShelf was called then works with success', () => {
    jest.spyOn(component, 'closeMenu');
    jest.spyOn(router, 'navigate');
    component.goToShelf();

    expect(router.navigate).toBeCalledTimes(1);
    expect(component.closeMenu).toBeCalledTimes(1);
  });

  it('when method goToResume was called then works with success', () => {
    jest.spyOn(component, 'closeMenu');
    jest.spyOn(router, 'navigate');
    component.goToResume();

    expect(router.navigate).toBeCalledTimes(1);
    expect(component.closeMenu).toBeCalledTimes(1);
  });

  it('when method goToWork was called then works with success', () => {
    jest.spyOn(component, 'closeMenu');
    jest.spyOn(router, 'navigate');
    component.goToWork();

    expect(router.navigate).toBeCalledTimes(1);
    expect(component.closeMenu).toBeCalledTimes(1);
  });
});
