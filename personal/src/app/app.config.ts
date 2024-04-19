import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  InstagramIcon,
  LinkedinIcon,
  LUCIDE_ICONS,
  LucideIconProvider,
  MailIcon, MapPinIcon, MoveRight,
  PhoneIcon,
  TwitterIcon
} from "lucide-angular";
import {provideHttpClient} from "@angular/common/http";
import {HomeService} from "./modulos/pages/home/main/service/home.service";

const myIcons = {InstagramIcon, LinkedinIcon, TwitterIcon, MailIcon, PhoneIcon,  MapPinIcon, MoveRight};
export const appConfig: ApplicationConfig = {
  providers: [
      provideRouter(routes),
      provideHttpClient(),
      HomeService,
      {
        provide: LUCIDE_ICONS,
        multi: true,
        useValue: new LucideIconProvider({InstagramIcon, LinkedinIcon, TwitterIcon, MailIcon, PhoneIcon,  MapPinIcon, MoveRight})
      }
  ],
};
