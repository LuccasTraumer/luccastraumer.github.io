import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HamburguerMenuComponent } from './hamburguer-menu/hamburguer-menu.component';
import { SkillsComponent } from './skills/skills.component';
import { FooterComponent } from './footer/footer.component';
import { AstronautaComponent } from './astronauta/astronauta.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HamburguerMenuComponent,
    SkillsComponent,
    FooterComponent,
    AstronautaComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule
  ],
    exports: [
        HeaderComponent,
        SkillsComponent,
        FooterComponent,
        AstronautaComponent,
        WelcomeComponent
    ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SharedModule { }
