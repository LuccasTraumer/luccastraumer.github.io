import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediasSectionComponent } from './social-medias-section.component';

describe('SocialMediasSectionComponent', () => {
  let component: SocialMediasSectionComponent;
  let fixture: ComponentFixture<SocialMediasSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialMediasSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialMediasSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
