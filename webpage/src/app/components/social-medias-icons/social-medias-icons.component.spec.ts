import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediasIconsComponent } from './social-medias-icons.component';

describe('SocialMediasIconsComponent', () => {
  let component: SocialMediasIconsComponent;
  let fixture: ComponentFixture<SocialMediasIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialMediasIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialMediasIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
