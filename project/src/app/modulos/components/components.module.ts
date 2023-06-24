import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { CloudinaryModule } from '@cloudinary/ng';
import { LucideAngularModule } from 'lucide-angular';
import { WellcomeComponent } from './wellcome/wellcome.component';
import { FunctionsComponent } from './functions/functions.component';
import { HistoryComponent } from './history/history.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    WellcomeComponent,
    FunctionsComponent,
    HistoryComponent,
    ProjectsComponent,
    ContactComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
        CloudinaryModule,
        LucideAngularModule,
      RouterModule,
      ReactiveFormsModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        WellcomeComponent,
        FunctionsComponent,
        HistoryComponent,
        ProjectsComponent,
        ContactComponent
    ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class ComponentsModule { }
