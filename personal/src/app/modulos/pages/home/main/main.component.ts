import { Component } from '@angular/core';
import {SkeltonComponent} from "../../../shared/skelton/skelton.component";
import ContactComponent from "../../../shared/contact/contact.component";
import FunctionsComponent from "../components/functions/functions.component";
import HistoryComponent from "../components/history/history.component";
import ProjectsComponent from "../components/projects/projects.component";
import WellcomeComponent from "../components/wellcome/wellcome.component";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  standalone: true,
  imports: [
    SkeltonComponent,
    ContactComponent,
    FunctionsComponent,
    HistoryComponent,
    ProjectsComponent,
    WellcomeComponent
  ],
  styles: ''
})
export default class MainComponent {
}


