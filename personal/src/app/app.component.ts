import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {CloudinaryModule} from '@cloudinary/ng';
import {ViewModule} from "./modulos/pages/home/view.module";
import {ReactiveFormsModule} from "@angular/forms";
import {ComponentsModule} from "./modulos/pages/home/components/components.module";
import { LucideAngularModule, InstagramIcon, LinkedinIcon, TwitterIcon, MailIcon, PhoneIcon,  MapPinIcon, MoveRight} from 'lucide-angular';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    CloudinaryModule,
    ViewModule,
    ReactiveFormsModule,
    ComponentsModule,
    // LucideAngularModule.pick({ InstagramIcon, LinkedinIcon, TwitterIcon, MailIcon, PhoneIcon,  MapPinIcon, MoveRight})

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Luccas Traumer';
}
