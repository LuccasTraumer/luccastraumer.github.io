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
    const desc = 'I\'m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.\n' +
      '\n' +
      ' \n' +
      '\n' +
      'I’m a great place for you to tell a story and let your users know a little more about you.';
    const mock = new CardJob(2019, 'Campinas', desc, 'Desenvolvedor Software', 'CIANDT');

    this.listaTrabalhos = [mock];
  }

}
