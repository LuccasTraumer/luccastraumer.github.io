import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCardComponent } from './list-card.component';
import { ApiGithubService } from '../api-github.service';

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
  });
});
