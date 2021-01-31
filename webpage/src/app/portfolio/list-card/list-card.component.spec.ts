import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCardComponent } from './list-card.component';

describe('ListCardComponent', () => {
  let component: ListCardComponent;
  let fixture: ComponentFixture<ListCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When get someone method should be return a url', () => {
    it('When call getLinkAirCnC should be return url', () => {
      fixture = TestBed.createComponent(ListCardComponent);
      component = fixture.componentInstance;
      expect(component.getLinkAirCnC()).toBe('https://github.com/LuccasTraumer/AirCnC');
    });

    it('When call getLinkWazeDev should be return url', () => {
      fixture = TestBed.createComponent(ListCardComponent);
      component = fixture.componentInstance;
      expect(component.getLinkWazeDev()).toBe('https://github.com/LuccasTraumer/WazeDev');
    });

    it('When call getLinkRemadeWebSite should be return url', () => {
      fixture = TestBed.createComponent(ListCardComponent);
      component = fixture.componentInstance;
      expect(component.getLinkRemadeWebSite()).toBe('https://github.com/LuccasTraumer/remade_random_websites');
    });

    it('When call getLinkTwitterData should be return url', () => {
      fixture = TestBed.createComponent(ListCardComponent);
      component = fixture.componentInstance;
      expect(component.getLinkTwitterData()).toBe('https://github.com/LuccasTraumer/twitter_data_covid-19');
    });

    it('When call getLinkMaiaraMartins should be return url', () => {
      fixture = TestBed.createComponent(ListCardComponent);
      component = fixture.componentInstance;
      expect(component.getLinkMaiaraMartins()).toBe('https://github.com/LuccasTraumer/mmartins');
    });
  });
});
