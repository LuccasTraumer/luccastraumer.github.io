import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalFooterComponent } from './personal-footer.component';

describe('PersonalFooterComponent', () => {
  let component: PersonalFooterComponent;
  let fixture: ComponentFixture<PersonalFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
