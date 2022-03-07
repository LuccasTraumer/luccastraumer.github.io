import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume/resume.component';
import { CardComponent } from './card/card.component';
import { SharedModule } from '../shared/shared.module';
import { LanguageComponent } from './language/language.component';

@NgModule({
  declarations: [ResumeComponent, CardComponent, LanguageComponent],
    imports: [
        CommonModule,
        SharedModule
    ],
  exports: [ResumeComponent]
})
export class ResumeModule { }
