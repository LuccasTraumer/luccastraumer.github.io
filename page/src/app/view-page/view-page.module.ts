import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowComponent } from './show/show.component';
import { AboutModule } from '../about/about.module';
import { ContactModule } from '../contact/contact.module';
import { HomeModule } from '../home/home.module';
import { PersonalHeaderModule } from '../personal-header/personal-header.module';
import { SocialMediaModule } from '../social-media/social-media.module';
import { WorkModule } from '../work/work.module';
import { PersonalFooterModule } from '../personal-footer/personal-footer.module';
import { BackgroundStarsModule } from '../background-stars/background-stars.module';



@NgModule({
  declarations: [ShowComponent],
  imports: [
    CommonModule,
    HomeModule,
    AboutModule,
    ContactModule,
    PersonalHeaderModule,
    SocialMediaModule,
    WorkModule,
    PersonalFooterModule,
    BackgroundStarsModule
  ],
  exports: [ShowComponent]
})
export class ViewPageModule { }
