import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { BassLayoutComponent } from './body/bass_layout.component';
import { DrumsLayoutComponent } from './body/drums_layout.component';
import { GuitarsLayoutComponent } from './body/guitars_layout.component';
import { HomeLayoutComponent } from './body/home_layout.component';
import { StudioandrecordingLayoutComponent } from './body/studioandrecording_layout.component';

const routes: Routes = [
  { path: 'home', component: HomeLayoutComponent },
  { path: 'guitars', component: GuitarsLayoutComponent},
  { path: 'studioandrecording', component: StudioandrecordingLayoutComponent},
  { path: 'drums', component: DrumsLayoutComponent},
  { path: 'bass', component: BassLayoutComponent},
  { path: 'auth', component: AuthComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
