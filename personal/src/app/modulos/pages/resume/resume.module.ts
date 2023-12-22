import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume/resume.component';
import { ResumeRoutingModule } from './resume-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ResumeServiceService } from './resume/service/resume-service.service';

@NgModule({
  declarations: [
    ResumeComponent
  ],
  imports: [
    CommonModule,
    ResumeRoutingModule,
    HttpClientModule
  ],
  providers: [ResumeServiceService]
})
export class ResumeModule { }
