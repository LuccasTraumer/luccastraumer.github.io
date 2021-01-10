import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialMediasSectionComponent } from './social-medias-section/social-medias-section.component';




@NgModule({
  declarations: [SocialMediasSectionComponent],
  imports: [
    CommonModule
  ],
  exports: [SocialMediasSectionComponent]
})
export class SocialMediasModule { }
