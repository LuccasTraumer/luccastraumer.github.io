import { Component, OnInit, inject } from '@angular/core';
import { ResumeServiceService } from '../../new-resume/service/resume-service.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {DefinitionDatePipe} from "../../new-resume/service/definition-date.pipe";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  standalone: true,
  imports: [CommonModule, HttpClientModule, DefinitionDatePipe],
  styleUrls: ['./resume.component.scss'],
  providers: [ResumeServiceService, DefinitionDatePipe],
})
export default class ResumeComponent implements OnInit {
  private service: ResumeServiceService = inject(ResumeServiceService);
  otherTechs!: string[];
  work!: any;
  techs!: string[];
  formatDate!: string;
  personalData!: Personal;

  ngOnInit(): void {
    this.service.getDataResume().subscribe({
      next: (res: any) => {
        this.otherTechs = res.otherTechs;
        this.work = res.work;
        this.techs = res.techs;
        this.personalData = res.personal;
      },
      error: (err) => {
        console.error(err);
      },
    });
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
