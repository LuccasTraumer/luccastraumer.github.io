import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';
import {Experience} from '../../model/experience.model';
import {Skills} from '../../model/skills.model';
import { Constantes } from '../../utils/Constantes';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  listaSkills = Array<Skills>();
  listaExperiences = Array<Experience>();
  readonly CONSTANTES = Constantes;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.listaSkills = this.dataService.buscarDadosSkills();
    this.listaExperiences = this.dataService.buscarDadosExperience();
  }
}
