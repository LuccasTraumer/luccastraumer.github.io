import { Component, OnInit } from '@angular/core';
import { CardJob } from '../model/card-job';
import { CardEducation } from '../model/card-education';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  listaTrabalhos: CardJob[];
  listaEnsino: CardEducation[];

  constructor() { }

  ngOnInit(): void {
    const descJobs = 'Actualy I work as a Full stack developer with Angular 8 and Spring boot(Java 8+).';
    const ciandt = new CardJob(2019, 'Campinas', descJobs, 'Desenvolvedor Software', 'CIANDT');

    const descCotucaWork = 'I worked as a computer monitor, where I helped students with technical doubts in computer science throughout the course, from Arduino with C ++ to mobile devices with Swift and Database. The contexts and languages ​​used are quite diverse.';
    const cotuca = new CardJob(2020, 'Campinas', descCotucaWork, 'PADEMT tutor', 'COTUCA', 2021);
    this.listaTrabalhos = [ciandt, cotuca];

    const descCotucaEdu = 'Systems Development Course was where I learned most of the Techniques, languages ​​and Methodologies necessary to act as a Software Developer and it was also where I opened the doors to work with what I like most.';
    const cotucaEdu = new CardEducation(2019, 'Campinas', descJobs, 'Techinical', 'COTUCA', 2021);

    const metrocamp = new CardEducation(2021, 'Campinas', 'To apromorated my Skills and get a Degree to Superior Curse',
      'Graduating', 'Unimetrocamo Wyden');

    this.listaEnsino = [cotucaEdu, metrocamp];
  }

}
