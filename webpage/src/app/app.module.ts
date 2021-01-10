import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ApresentacaoComponent } from './components/apresentacao/apresentacao.component';
import { ResumeComponent } from './components/resume/resume.component';
import { PortifolioComponent } from './components/portifolio/portifolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { TimelineComponent } from './components/resume/timeline/timeline.component';
import { ListCardComponent } from './components/portifolio/list-card/list-card.component';
import { BuildingComponent } from './components/building/building.component';
import { InputDataComponent } from './components/contact/input-data/input-data.component';
import { MapsComponent } from './components/contact/maps/maps.component';
import { SocialMediasIconsComponent } from './components/social-medias-icons/social-medias-icons.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderModule } from './header/header.module';
import { ProfileModule } from './profile/profile.module';
import { AboutModule } from './about/about.module';

@NgModule({
  declarations: [
    AppComponent,

    ApresentacaoComponent,
    ResumeComponent,
    PortifolioComponent,
    ContactComponent,
    FooterComponent,
    TimelineComponent,
    ListCardComponent,
    BuildingComponent,
    InputDataComponent,
    MapsComponent,
    SocialMediasIconsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HeaderModule,
    ProfileModule,
    AboutModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA9pWS6ELL5zjNttJjuG2779wyZzcAPzMM'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
