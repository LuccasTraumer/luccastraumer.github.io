import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StaticHeaderComponent } from './components/static-header/static-header.component';
import { ApresentacaoComponent } from './components/apresentacao/apresentacao.component';
import { LinksComponent } from './components/static-header/links/links.component';

@NgModule({
  declarations: [
    AppComponent,
    StaticHeaderComponent,
    ApresentacaoComponent,
    LinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
