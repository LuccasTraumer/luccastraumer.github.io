import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  techs: string[] = [
    'javascript',
    'typescript',
    'java',
    'html5',
    'css3',
    'angular',
    'node',
    'sass',
    'spring boot'
  ]

  otherTechs: string[] = [
    'pwa',
    'E2E testing',
    'software testing',
    'responsive web design'
  ]

  work: Work = {
    title: 'CIANDT',
    level: 'Mid Level',
    specialist: 'frontend',
    description: ' Shaping the future of commerce and entrepreneurship – building and advocating for inclusive and thoughtful experiences for over three million merchants across the globe.',
    start_date: new Date('2020-02-10'),
    end_date: undefined
  };

  constructor() { }

  ngOnInit(): void {
  }


  getFormatDate(): string {
    return `Feb 2020`
  }
}

interface Work {
  title: string;
  level: string;
  specialist: string;
  description: string;
  start_date: Date;
  end_date?: Date;
}
