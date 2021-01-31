import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSectionComponent } from './portfolio-section.component';

describe('PortfolioSectionComponent', () => {
  let component: PortfolioSectionComponent;
  let fixture: ComponentFixture<PortfolioSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('When call getIconPort should be return a url', () => {
    fixture = TestBed.createComponent(PortfolioSectionComponent);
    component = fixture.componentInstance;
    expect(component.getIconPort()).toBe('https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io/b2e1bd71be97e847ef9fbb1ff3a927a678d1ef64/webpage/src/assets/icons/portfolio.svg');
  });
});
