import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ViewPageModule } from './view-page/view-page.module';
import { ShowComponent } from './view-page/show/show.component';

const routes: Routes = [
  {
    path: 'home',
    component: ShowComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: AppComponent,
  },
  {
    path: 'navbarNavAltMarkup',
    redirectTo: 'home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
