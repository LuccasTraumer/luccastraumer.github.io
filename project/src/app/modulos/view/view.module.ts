import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';
import { ProjectsModule } from '../projects/projects.module';
import { ContactModule } from '../contact/contact.module';



@NgModule({
  declarations: [
    MainComponent
  ],
  exports: [
    MainComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProjectsModule,
    ContactModule
  ]
})
export class ViewModule { }
