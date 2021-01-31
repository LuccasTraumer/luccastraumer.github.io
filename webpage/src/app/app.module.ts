import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { ProfileModule } from './profile/profile.module';
import { AboutModule } from './about/about.module';
import { ResumeModule } from './resume/resume.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { ContactModule } from './contact/contact.module';
import { FooterModule } from './footer/footer.module';
import { NotFoundModule } from './not-found/not-found.module';
import { BuildingModule } from './building/building.module';
import { ViewPageModule } from './view-page/view-page.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HeaderModule,
    ProfileModule,
    AboutModule,
    ResumeModule,
    PortfolioModule,
    ContactModule,
    FooterModule,
    NotFoundModule,
    BuildingModule,
    ViewPageModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA9pWS6ELL5zjNttJjuG2779wyZzcAPzMM'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
