import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewPageModule } from './view-page/view-page.module';
import { BuildingModule } from './building/building.module';
import { NotFoundModule } from './not-found/not-found.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ViewPageModule,
    BuildingModule,
    NotFoundModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
