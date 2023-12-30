import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {Subject, takeUntil} from "rxjs";
import {ResumeServiceService} from "./service/resume-service.service";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-new-resume',
  standalone: true,
    imports: [
        NgForOf,
      HttpClientModule
    ],
  providers: [ResumeServiceService],
  templateUrl: './new-resume.component.html',
  styleUrl: './new-resume.component.scss'
})
export class NewResumeComponent implements OnInit, OnDestroy {
  private end!: Subject<any>;
  otherTechs!: string[];
  work!: any;
  techs!: string[];
  formatDate!: string;

  personalData!: Personal;

  private service: ResumeServiceService = inject(ResumeServiceService);
  ngOnInit(): void {
    this.service.getDataResume()
      .pipe(takeUntil(this.end))
      .subscribe({
      next: (res: any) => {
        this.otherTechs = res.otherTechs;
        this.work = res.work;
        this.techs = res.techs;
        this.personalData = res.personal;
      },
      error: err => {
        console.error(err);
      }
    })
  }

  ngOnDestroy(): void {
    this.end.next('end');
    this.end.complete();
  }
}

interface Personal {
  city: string;
  state: string;
  personalPage: string;
  email: string;
  name: string;
  lastName: string;
  experience: string;
}
