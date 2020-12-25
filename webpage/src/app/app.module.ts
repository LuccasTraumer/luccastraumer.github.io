import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StaticHeaderComponent } from './components/static-header/static-header.component';
import { ApresentacaoComponent } from './components/apresentacao/apresentacao.component';
import { LinksComponent } from './components/static-header/links/links.component';
import { HeadComponent } from './components/head/head.component';
import { AboutComponent } from './components/about/about.component';
import { ResumeComponent } from './components/resume/resume.component';
import { PortifolioComponent } from './components/portifolio/portifolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/head/card/card.component';
import { RoundedImageComponent } from './components/head/rounded-image/rounded-image.component';
import { ApresentacaoImageDataComponent } from './components/head/apresentacao-image-data/apresentacao-image-data.component';
import { PersonalDataListComponent } from './components/about/personal-data-list/personal-data-list.component';
import { ListHobbiesComponent } from './components/about/list-hobbies/list-hobbies.component';
import { TimelineComponent } from './components/resume/timeline/timeline.component';
import { ListCardComponent } from './components/portifolio/list-card/list-card.component';
import { BuildingComponent } from './components/building/building.component';
import { InputDataComponent } from './components/contact/input-data/input-data.component';
import { MapsComponent } from './components/contact/maps/maps.component';
import { AgmCoreModule } from '@agm/core';
import { SocialMediasIconsComponent } from './components/social-medias-icons/social-medias-icons.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    StaticHeaderComponent,
    ApresentacaoComponent,
    LinksComponent,
    HeadComponent,
    AboutComponent,
    ResumeComponent,
    PortifolioComponent,
    ContactComponent,
    FooterComponent,
    CardComponent,
    RoundedImageComponent,
    ApresentacaoImageDataComponent,
    PersonalDataListComponent,
    ListHobbiesComponent,
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
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA9pWS6ELL5zjNttJjuG2779wyZzcAPzMM'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }