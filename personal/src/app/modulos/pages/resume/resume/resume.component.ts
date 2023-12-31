import { Component, OnInit, inject } from '@angular/core';
import { ResumeServiceService } from '../../new-resume/service/resume-service.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  styleUrls: ['./resume.component.scss'],
  providers: [ResumeServiceService],
})
export default class ResumeComponent implements OnInit {
  otherTechs!: string[];
  work!: any;
  techs!: string[];
  formatDate!: string;

  personalData!: Personal;
  private service: ResumeServiceService = inject(ResumeServiceService);

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
