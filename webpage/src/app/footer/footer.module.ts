import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterSectionComponent } from './footer-section/footer-section.component';
import { SocialMediasModule } from '../social-medias/social-medias.module';


@NgModule({
  declarations: [FooterSectionComponent],
  imports: [
    CommonModule,
    SocialMediasModule
  ],
  exports: [FooterSectionComponent]
})
export class FooterModule { }
