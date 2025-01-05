import {ChangeDetectionStrategy, Component, HostListener, inject, OnInit} from '@angular/core';
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
import {HttpClientModule} from "@angular/common/http";
import {fromEvent, Subscription} from "rxjs";
import {ScrollService} from "./service/scroll.service";

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
    LoaderComponent,
    HttpClientModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class MainComponent implements OnInit {
  activeSection: string | undefined;
  sectionVisbleService = inject(SectionVisibleService);
  scrollService = inject(ScrollService);
  scrollSubscription!: Subscription;

  protected sections: HTMLElement[] = [];

  ngOnInit(): void {
    this.scrollSubscription = this.scrollService.onScroll().subscribe(() => {
      console.log('Página rolada!');
    });

    this.sectionVisbleService.setSectionVisible()
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    console.log('scroll');
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    let targetSectionIndex = -1;

    for (let i = 0; i < this.sections.length; i++) {
      const sectionTop = this.sections[i].offsetTop;
      if (scrollPosition >= sectionTop - windowHeight * 0.5) {
        targetSectionIndex = i;
      } else {
        break;
      }
    }

    if (targetSectionIndex !== -1) {
      const nextSectionIndex = targetSectionIndex + 1;
      const prevSectionIndex = targetSectionIndex - 1;

      if (nextSectionIndex < this.sections.length && scrollPosition > this.sections[nextSectionIndex].offsetTop - windowHeight * 0.5) {
        this.scrollIntoView(nextSectionIndex);
      } else if (prevSectionIndex >= 0 && scrollPosition < this.sections[prevSectionIndex].offsetTop - windowHeight * 0.5) {
        this.scrollIntoView(prevSectionIndex);
      }
    }
  }

  protected scrollIntoView(index: number) {
    this.sections[index].scrollIntoView({ behavior: 'smooth' });
  }
}


