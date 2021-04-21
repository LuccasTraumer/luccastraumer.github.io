import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialMediaComponent } from './social-media/social-media.component';

@NgModule({
  declarations: [SocialMediaComponent],
  imports: [
    CommonModule
  ],
  exports: [SocialMediaComponent]
})
export class SocialMediaModule { }
