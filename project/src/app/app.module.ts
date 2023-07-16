import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LucideAngularModule, InstagramIcon, LinkedinIcon, TwitterIcon, MailIcon, PhoneIcon,  MapPinIcon, MoveRight} from 'lucide-angular';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from './modulos/components/components.module';
import { ViewModule } from './modulos/features/view/view.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ViewModule,
    ReactiveFormsModule,
    RouterModule,
    ComponentsModule,
    LucideAngularModule.pick({ InstagramIcon, LinkedinIcon, TwitterIcon, MailIcon, PhoneIcon,  MapPinIcon, MoveRight})
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
