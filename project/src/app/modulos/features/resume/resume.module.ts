import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume/resume.component';
import { ResumeRoutingModule } from './resume-routing.module';
import { ViewResumeComponent } from './view-resume/view-resume.component';



@NgModule({
  declarations: [
    ResumeComponent,
    ViewResumeComponent
  ],
  imports: [
    CommonModule,
    ResumeRoutingModule
  ]
})
export class ResumeModule { }
