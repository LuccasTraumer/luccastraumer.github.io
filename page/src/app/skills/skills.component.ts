import { Component, OnInit } from '@angular/core';
import { Constantes} from '../../utils/Constantes';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  listaSkills = Array<Skills>();
  listaExperiences = Array<Experience>();

  constructor() { }

  ngOnInit(): void {
    this.listaSkills.push(new Skills(Constantes.ICONE_ANGULAR, 'Angular', ''));
    this.listaSkills.push(new Skills(Constantes.ICONE_TYPESCRIPT, 'Typescript', ''));
    this.listaSkills.push(new Skills(Constantes.ICONE_JAVASCRIPT, 'Javascript', ''));
    this.listaSkills.push(new Skills(Constantes.ICONE_CSS, 'CSS', ''));
    this.listaSkills.push(new Skills(Constantes.ICONE_JAVA, 'Java', ''));
    this.listaSkills.push(new Skills(Constantes.ICONE_NGINX, 'Nginx', ''));
    this.listaSkills.push(new Skills(Constantes.ICONE_DOCKER, 'Docker', ''));
    this.listaSkills.push(new Skills(Constantes.ICONE_PYTHON, 'Python', ''));

    this.listaExperiences.push(new Experience(2020, 'CIANDT', 'Software Develop'));
    this.listaExperiences.push(new Experience(2020, 'Technical High School of Campinas\n' +
      '- UNICAMP', 'PADEMT tutor and Mentor', 2021));
  }

}

class Skills {
  pathImage: string;
  nomeSkill: string;
  linkDoc: string;

  constructor(pathImage: string, nomeSkill: string, linkDoc: string) {
    this.pathImage = pathImage;
    this.nomeSkill = nomeSkill;
    this.linkDoc = linkDoc;
  }
}

class Experience {
  anoInicio: number;
  anoTermino?: number;
  nomeEmpresa: string;
  cargo: string;

  constructor(anoInicio: number, nomeEmpresa: string, cargo: string, anoTermino?: number) {
    this.anoInicio = anoInicio;
    this.anoTermino = anoTermino;
    this.nomeEmpresa = nomeEmpresa;
    this.cargo = cargo;
  }
}
