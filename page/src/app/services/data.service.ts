import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {DadosRedesSociais} from '../../model/dados-redes-sociais.model';
import {Constantes} from '../../utils/Constantes';
import {Experience} from '../../model/experience.model';
import {Skills} from '../../model/skills.model';
import { RepositoryModel } from '../../model/repository-model';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { error } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  readonly CONSTANTES = Constantes;
  private apiGithubRepositories = Constantes.apiGithubRepository;

  constructor(private http: HttpClient) { }

  buscarDadosSkills(): Array<Skills> {
    const listaSkills = Array<Skills>();

    listaSkills.push(new Skills(Constantes.ICONE_ANGULAR, 'Angular', ''));
    listaSkills.push(new Skills(Constantes.ICONE_TYPESCRIPT, 'Typescript', ''));
    listaSkills.push(new Skills(Constantes.ICONE_JAVASCRIPT, 'Javascript', ''));
    listaSkills.push(new Skills(Constantes.ICONE_CSS, 'CSS', ''));
    listaSkills.push(new Skills(Constantes.ICONE_JAVA, 'Java', ''));
    listaSkills.push(new Skills(Constantes.ICONE_NGINX, 'Nginx', ''));
    listaSkills.push(new Skills(Constantes.ICONE_DOCKER, 'Docker', ''));
    listaSkills.push(new Skills(Constantes.ICONE_PYTHON, 'Python', ''));

    return listaSkills;
  }

  buscarDadosExperience(): Array<Experience> {
    const listaExperiences = Array<Experience>();

    listaExperiences.push(new Experience(2020, 'CIANDT', 'Software Develop'));
    listaExperiences.push(new Experience(2020, 'Technical High School of Campinas\n' +
      '- UNICAMP', 'PADEMT tutor and Mentor', 2021));

    return listaExperiences;
  }

  buscarDadosSocialMedia(): Array<DadosRedesSociais> {
    const redeSociais = Array<DadosRedesSociais>();

    redeSociais.push(new DadosRedesSociais(this.CONSTANTES.PATH_ICONE_INSTAGRAM,  'Instagram',
      'https://www.instagram.com/luccastraumer/', 'Icone Instragram'));

    redeSociais.push(new DadosRedesSociais(this.CONSTANTES.PATH_ICONE_LINKEDIN,  'Linkedin',
      'https://www.linkedin.com/in/lucassjesus/', 'Icone Linkedin'));

    redeSociais.push(new DadosRedesSociais(this.CONSTANTES.PATH_ICONE_TWITTER,  'Twitter',
      'https://twitter.com/LuccasTraumer', 'Icone Twitter'));

    redeSociais.push(new DadosRedesSociais(this.CONSTANTES.PATH_ICONE_GITHUB,  'Github',
      'https://github.com/LuccasTraumer', 'Icone Github'));

    return redeSociais;
  }

  buscarDadosGithub(): Observable<RepositoryModel[]> {
    return this.http.get<RepositoryModel[]>(this.apiGithubRepositories)
      .pipe(
        retry(2));
  }

  sendEmail(data): any {
    const api = 'https://mailthis.to/lucassj.dev';
    return this.http.post(api, data, { responseType: 'text' }).pipe(
      map((response) => {
        if (response) {
          return response;
        }
      },
        (error: any) => {
          return error;
        }
      )
    );
  }
}
