import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { ApresentacaoComponent } from './components/apresentacao/apresentacao.component';
import { BuildingComponent } from './components/building/building.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderModule } from './header/header.module';
import { ProfileModule } from './profile/profile.module';
import { AboutModule } from './about/about.module';
import { ResumeModule } from './resume/resume.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { ContactModule } from './contact/contact.module';
import { FooterModule } from './footer/footer.module';

@NgModule({
  declarations: [
    AppComponent,
    ApresentacaoComponent,
    BuildingComponent,
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
    FooterModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA9pWS6ELL5zjNttJjuG2779wyZzcAPzMM'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
