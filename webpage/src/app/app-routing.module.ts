import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApresentacaoComponent } from './components/apresentacao/apresentacao.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
  { 
    path: 'home',
    component: ApresentacaoComponent,
    pathMatch: 'full' 
  },
  { 
    path: '',
    redirectTo: 'home',
    pathMatch: 'full' 
  },
  { 
    path: '**',
    component: NotFoundComponent,
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
