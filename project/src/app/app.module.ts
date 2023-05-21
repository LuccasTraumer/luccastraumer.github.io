import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewModule } from './modulos/view/view.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LucideAngularModule, InstagramIcon, LinkedinIcon, TwitterIcon, MailIcon, PhoneIcon,  MapPinIcon} from 'lucide-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ViewModule,
    ReactiveFormsModule,
    LucideAngularModule.pick({ InstagramIcon, LinkedinIcon, TwitterIcon, MailIcon, PhoneIcon,  MapPinIcon})
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
