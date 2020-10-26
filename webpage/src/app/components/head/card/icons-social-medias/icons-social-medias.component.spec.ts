import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsSocialMediasComponent } from './icons-social-medias.component';

describe('IconsSocialMediasComponent', () => {
  let component: IconsSocialMediasComponent;
  let fixture: ComponentFixture<IconsSocialMediasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsSocialMediasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsSocialMediasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
