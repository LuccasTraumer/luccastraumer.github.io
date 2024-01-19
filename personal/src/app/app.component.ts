import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {CloudinaryModule} from '@cloudinary/ng';
import {ReactiveFormsModule} from "@angular/forms";
import { LucideAngularModule} from 'lucide-angular';
import LoaderComponent from "./modulos/shared/loader/loader.component";
import {SkeltonComponent} from "./modulos/shared/skelton/skelton.component";
import {LoaderService} from "./modulos/shared/loader/service/loader.service";
import MainComponent from "./modulos/pages/home/main/main.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    CloudinaryModule,
    ReactiveFormsModule,
    MainComponent,
    LoaderComponent,
    SkeltonComponent,
    LucideAngularModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Luccas Traumer';
  loaderService = inject(LoaderService);

  constructor() {
    this.loaderService.setStateLoader(true);
  }
}
