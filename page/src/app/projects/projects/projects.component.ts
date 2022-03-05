import { Component, OnInit } from '@angular/core';
import { CardProject } from '../models/card-project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  listaProjecto: CardProject[];

  constructor() { }

  ngOnInit(): void {
    const desc = 'I\'m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.';
    const url = 'https://static.wixstatic.com/media/11062b_6369a82539704f78b4fffed0ef058629~mv2_d_2346_1998_s_2.jpg/v1/crop/x_178,y_249,w_1998,h_1422/fill/w_280,h_198,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Leaflet.jpg';
    const mockProject = new CardProject('Project name 01', 'Role Title', desc, url);

    this.listaProjecto = [mockProject, mockProject];
  }

}
