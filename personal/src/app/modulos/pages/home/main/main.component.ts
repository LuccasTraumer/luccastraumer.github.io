import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {SkeltonComponent} from "../../../shared-ui/skelton/skelton.component";
import ContactComponent from "../../../layout/contact/contact.component";
import FunctionsComponent from "../components/functions/functions.component";
import HistoryComponent from "../components/history/history.component";
import ProjectsComponent from "../components/projects/projects.component";
import WellcomeComponent from "../components/wellcome/wellcome.component";
import {AsyncPipe, NgStyle} from "@angular/common";
import {SectionVisibleService} from "../../../services/section-visible/section-visible.service";
import FooterComponent from "../../../layout/footer/footer.component";
import LoaderComponent from "../../../shared-ui/loader/loader.component";

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
    FooterComponent,
    LoaderComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class MainComponent {
  activeSection: string | undefined;
  sectionVisbleService = inject(SectionVisibleService);
}


