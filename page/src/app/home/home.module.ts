import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SocialMediaModule } from '../social-media/social-media.module';
import { ButtonModule } from '../button/button.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SocialMediaModule,
    ButtonModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
