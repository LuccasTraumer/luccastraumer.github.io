import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { ApresentacaoComponent } from './components/apresentacao/apresentacao.component';
import { FooterComponent } from './components/footer/footer.component';
import { BuildingComponent } from './components/building/building.component';
import { SocialMediasIconsComponent } from './components/social-medias-icons/social-medias-icons.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderModule } from './header/header.module';
import { ProfileModule } from './profile/profile.module';
import { AboutModule } from './about/about.module';
import { ResumeModule } from './resume/resume.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { ContactModule } from './contact/contact.module';

@NgModule({
  declarations: [
    AppComponent,
    ApresentacaoComponent,
    FooterComponent,
    BuildingComponent,
    SocialMediasIconsComponent,
    NotFoundComponent,
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
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA9pWS6ELL5zjNttJjuG2779wyZzcAPzMM'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
