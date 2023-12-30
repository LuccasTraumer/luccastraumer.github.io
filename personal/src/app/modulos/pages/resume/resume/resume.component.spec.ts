import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeComponent } from './resume.component';
import {ResumeServiceService} from "../../new-resume/service/resume-service.service";
import {of} from "rxjs";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('ResumeComponent', () => {
  let component: ResumeComponent;
  let fixture: ComponentFixture<ResumeComponent>;
  let service: ResumeServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeComponent ],
      imports: [
        HttpClientTestingModule
      ]
    })
    .compileComponents();

    service = TestBed.inject(ResumeServiceService);

    fixture = TestBed.createComponent(ResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('when method oninit was executed then works', () => {
    jest.spyOn(service, 'getDataResume').mockReturnValue(of({
      otherTechs: '',
      work: '',
      techs: '',
      personal: {
        city: '',
        state: '',
        personalPage: '',
        email: '',
        name: '',
        lastName: '',
        experience: ''
      }
    }));

    component.ngOnInit();

    expect(service.getDataResume).toBeCalledTimes(1);
  });
});
