import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [CardComponent, AboutComponent],
  exports: [
    CardComponent,
    AboutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ResumeModule { }
