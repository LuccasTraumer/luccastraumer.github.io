import {Component, ElementRef, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet} from '@angular/router';
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
  providers: [Router],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Luccas Traumer';

  protected loaderService = inject(LoaderService);
  protected sectionVisbleService = inject(SectionVisibleService);
  protected router: Router = inject(Router);
  private elementRef: ElementRef = inject(ElementRef);

  protected sections: HTMLElement[] = [];


  ngOnInit(): void {
    this.sections = Array.from(this.elementRef.nativeElement.querySelectorAll('.section'));
    this.loaderService.setStateLoader(true);
  }

  protected scrollIntoView(index: number) {
    this.sections[index].scrollIntoView({ behavior: 'smooth' });
  }

  protected isGreenBorder(): boolean {
    return this.sectionVisbleService.getActiveSection() === 'history' || this.sectionVisbleService.getActiveSection() === 'footer'
  }
}
