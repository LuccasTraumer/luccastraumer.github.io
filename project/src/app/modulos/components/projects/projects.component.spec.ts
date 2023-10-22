import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsComponent } from './projects.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsComponent ],
      imports: [
        RouterTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('When method redirectArticle was called then works with success', () => {
    jest.spyOn(router, 'navigate');
    component.redirectArticle({});

    expect(router.navigate).toBeCalledTimes(1);
  });

  it('When method redirectToWork was called then works with success', () => {
    jest.spyOn(router, 'navigate');
    component.redirectToWork({});

    expect(router.navigate).toBeCalledTimes(1);
  });
});
