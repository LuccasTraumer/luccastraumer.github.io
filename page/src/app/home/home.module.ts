import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SocialMediaModule } from '../social-media/social-media.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SocialMediaModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
