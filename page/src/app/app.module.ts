import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IntroduceCardComponent } from './introduce-card/introduce-card.component';
import { SkillsComponent } from './skills/skills.component';
import {HttpClientModule} from '@angular/common/http';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { DataService } from './services/data.service';
import { HamburguerMenuComponent } from './hamburguer-menu/hamburguer-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroduceCardComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    HamburguerMenuComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
