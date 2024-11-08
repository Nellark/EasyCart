import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { HomeComponent } from './pages/home/home.component';
import { DisplayComponent } from './pages/display/display.component';

export const routes: Routes = [

  { path: '', title: 'Landing page', component: LandingComponent },
  { path: 'home', title: 'Home', component: HomeComponent },
  { path: 'display/:id', title: 'Display', component: DisplayComponent }, 

];
