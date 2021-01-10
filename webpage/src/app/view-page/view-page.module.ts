import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowComponent } from './show/show.component';
import { AboutModule } from '../about/about.module';
import { BuildingModule } from '../building/building.module';
import { ContactModule } from '../contact/contact.module';
import { FooterModule } from '../footer/footer.module';
import { HeaderModule } from '../header/header.module';
import { PortfolioModule } from '../portfolio/portfolio.module';
import { ProfileModule } from '../profile/profile.module';
import { ResumeModule } from '../resume/resume.module';



@NgModule({
  declarations: [ShowComponent],
  imports: [
    CommonModule,
    AboutModule,
    BuildingModule,
    ContactModule,
    FooterModule,
    HeaderModule,
    PortfolioModule,
    ProfileModule,
    ResumeModule
  ],
  exports: [ShowComponent]
})
export class ViewPageModule { }
