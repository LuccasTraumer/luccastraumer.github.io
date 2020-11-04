import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHobbiesComponent } from './list-hobbies.component';

describe('ListHobbiesComponent', () => {
  let component: ListHobbiesComponent;
  let fixture: ComponentFixture<ListHobbiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListHobbiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHobbiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
