import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HamburguerMenuComponent } from './hamburguer-menu/hamburguer-menu.component';
import { SkillsComponent } from './skills/skills.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HamburguerMenuComponent,
    SkillsComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
    exports: [
        HeaderComponent,
        SkillsComponent,
        FooterComponent
    ]
})
export class SharedModule { }
