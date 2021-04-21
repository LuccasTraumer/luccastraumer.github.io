import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalHeaderComponent } from './personal-header.component';

describe('PersonalHeaderComponent', () => {
  let component: PersonalHeaderComponent;
  let fixture: ComponentFixture<PersonalHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
