import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalFooterComponent } from './personal-footer/personal-footer.component';
import { SocialMediaModule } from '../social-media/social-media.module';



@NgModule({
  declarations: [PersonalFooterComponent],
  imports: [
    CommonModule,
    SocialMediaModule
  ],
  exports: [PersonalFooterComponent]
})
export class PersonalFooterModule { }
