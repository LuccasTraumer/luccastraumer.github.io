import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { AboutComponent } from './about/about.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [CardComponent, AboutComponent],
  exports: [
    CardComponent,
    AboutComponent
  ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class AboutModule { }
