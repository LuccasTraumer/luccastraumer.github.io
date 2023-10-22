import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import {Router} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ FooterComponent ]
    })
    .compileComponents();

    router = TestBed.inject(Router);

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('when method goToWork has executed then return sucess', () => {
    jest.spyOn(router, 'navigate');
    component.goToWork()
    expect(router.navigate).toBeCalledTimes(1)
  });

  it('when method goToShelf has executed then return sucess', () => {
    jest.spyOn(router, 'navigate');
    component.goToShelf()
    expect(router.navigate).toBeCalledTimes(1)
  });

  it('when method goToResume has executed then return sucess', () => {
    jest.spyOn(router, 'navigate');
    component.goToResume()
    expect(router.navigate).toBeCalledTimes(1)
  });
});
