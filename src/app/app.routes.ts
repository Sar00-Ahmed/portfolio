import { Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { PlaygroundComponent } from './playground/playground/playground.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'playground',
    component: PlaygroundComponent
  },

  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  // { //wildcard route must be last
  //   path: '**',
  //   redirectTo: '/page-not-found',
  // }

];
