import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioSectionComponent } from './portfolio-section/portfolio-section.component';
import { ListCardComponent } from './list-card/list-card.component';



@NgModule({
  declarations: [PortfolioSectionComponent, ListCardComponent],
  imports: [
    CommonModule
  ],
  exports: [PortfolioSectionComponent]
})
export class PortfolioModule { }
