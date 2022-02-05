import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';
import {Experience} from '../../model/experience.model';
import {Skills} from '../../model/skills.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  listaSkills = Array<Skills>();
  listaExperiences = Array<Experience>();

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.listaSkills = this.dataService.buscarDadoosSkills();
    this.listaExperiences = this.dataService.buscarDadosExperience();
  }
}
