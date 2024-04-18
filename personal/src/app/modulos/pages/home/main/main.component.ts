import {Component, ElementRef, HostListener, inject, OnInit} from '@angular/core';
import {SkeltonComponent} from "../../../shared/skelton/skelton.component";
import ContactComponent from "../../../shared/contact/contact.component";
import FunctionsComponent from "../components/functions/functions.component";
import HistoryComponent from "../components/history/history.component";
import ProjectsComponent from "../components/projects/projects.component";
import WellcomeComponent from "../components/wellcome/wellcome.component";
import {HomeService} from "./service/home.service";
import {AsyncPipe, NgStyle} from "@angular/common";
import {SectionVisibleService} from "../../../shared/services/section-visible/section-visible.service";
import {AngularFullpageModule} from "@fullpage/angular-fullpage";
import FooterComponent from "../../../shared/footer/footer.component";

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
    WellcomeComponent,
    AsyncPipe,
    NgStyle,
    AngularFullpageModule,
    FooterComponent
  ],
  styles: ''
})
export default class MainComponent {
  homeSectionService: HomeService = inject(HomeService);
  activeSection: string | undefined;
  sectionVisbleService = inject(SectionVisibleService);
}


