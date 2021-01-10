import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeSectionComponent } from './resume-section/resume-section.component';
import { TimelineComponent } from './timeline/timeline.component';



@NgModule({
  declarations: [ResumeSectionComponent, TimelineComponent],
  imports: [
    CommonModule
  ],
  exports: [ResumeSectionComponent]
})
export class ResumeModule { }
