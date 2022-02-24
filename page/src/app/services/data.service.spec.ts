import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Constantes } from '../../utils/Constantes';

describe('SkillService', () => {
  let service: DataService;

  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [ HttpClientTestingModule, HttpClientTestingModule ]
    });

    http = TestBed.inject(HttpTestingController);
    service = TestBed.inject(DataService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    http.verify();
  });

  test('Quando executar o metodo buscarDadosSkills deve retornar a lista com 3 elementos', () => {
    const response = service.buscarDadosSkills();

    expect(response.length).toEqual(8);
  });

  test('Quando executar o buscarDadosSocialMedia deve retornar duas experiencias', () => {
    const response = service.buscarDadosSocialMedia();

    expect(response.length).toEqual(4);
  });

  test('Quando executar o buscarDadosExperience deve retornar duas experiencias', () => {
    const response = service.buscarDadosExperience();

    expect(response.length).toEqual(2);
  });

  test('Quando executar o buscarDadosGithub deve retornar duas experiencias', () => {
    service.buscarDadosGithub().subscribe(model => {
      expect(model).toEqual({});
    });

    const req = http.expectOne(Constantes.apiGithubRepository);

    expect(req.request.method).toBe('GET');
    req.flush({});
  });
});
