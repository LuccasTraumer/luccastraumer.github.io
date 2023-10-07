import { Component, OnInit } from '@angular/core';
import { ResumeServiceService } from './service/resume-service.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  otherTechs!: string[];
  work!: any;
  techs!: string[];
  formatDate!: string;

  personalData!: Personal;

  constructor(private service: ResumeServiceService) { }

  ngOnInit(): void {
    this.service.getDataResume().subscribe({
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
