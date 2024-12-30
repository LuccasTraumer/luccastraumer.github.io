import {Component, ElementRef, HostListener, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {ReactiveFormsModule} from "@angular/forms";
import { LucideAngularModule} from 'lucide-angular';
import LoaderComponent from "./modulos/shared-ui/loader/loader.component";
import {SkeltonComponent} from "./modulos/shared-ui/skelton/skelton.component";
import {LoaderService} from "./modulos/shared-ui/loader/service/loader.service";
import MainComponent from "./modulos/pages/home/main/main.component";
import HeaderComponent from "./modulos/layout/header/header.component";
import FooterComponent from "./modulos/layout/footer/footer.component";
import {SectionVisibleService} from "./modulos/services/section-visible/section-visible.service";
import ContactComponent from "./modulos/layout/contact/contact.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ReactiveFormsModule,
    MainComponent,
    LoaderComponent,
    SkeltonComponent,
    LucideAngularModule,
    HeaderComponent,
    FooterComponent,
    ContactComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Luccas Traumer';
  loaderService = inject(LoaderService);
  sectionVisbleService = inject(SectionVisibleService);
  private elementRef: ElementRef = inject(ElementRef);

  sections: HTMLElement[] = [];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset;
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
  ngOnInit(): void {
    this.sections = Array.from(this.elementRef.nativeElement.querySelectorAll('.section'));
    this.loaderService.setStateLoader(true);

  }

  scrollIntoView(index: number) {
    this.sections[index].scrollIntoView({ behavior: 'smooth' });
  }

  isGreenBorder(): boolean {
    return this.sectionVisbleService.getActiveSection() === 'history' || this.sectionVisbleService.getActiveSection() === 'footer'
  }
}
