import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PresentComponent } from './present/present.component';
import { AboutComponent } from './about/about.component';
import { PortfloioComponent } from './portfloio/portfloio.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { SharedModule } from '../shared/shared.module';
import { CloudinaryModule } from '@cloudinary/ng';
import { DesktopComponent } from './header/desktop/desktop.component';
import { MobileComponent } from './header/mobile/mobile.component';
import { LucideAngularModule } from 'lucide-angular';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PresentComponent,
    AboutComponent,
    PortfloioComponent,
    ExperienceComponent,
    ContactComponent,
    DesktopComponent,
    MobileComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
        CloudinaryModule,
        LucideAngularModule
    ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PresentComponent,
    AboutComponent,
    PortfloioComponent,
    ExperienceComponent,
    ContactComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class ComponentsModule { }
