import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
 
  {
    path: 'experiments',
    loadChildren: './feature-module/experiments-module/experiments.module#ExperimentsModule'
  },
  {
    path: 'dots',
    loadChildren: './feature-module/dots-module/dots.module#DotsModule'
  },
  {
    path: 'frames',
    loadChildren: './feature-module/frames-module/frames.module#FramesModule'
  },
  {
    path: 'movements',
    loadChildren: './feature-module/movements-module/movements.module#MovementsModule'
  },
  {
    path: 'participants',
    loadChildren: './feature-module/participants-module/participants.module#ParticipantsModule'
  },
  {
    path: 'sessions',
    loadChildren: './feature-module/sessions-module/sessions.module#SessionsModule'
  },
  {
    path: 'stimuli',
    loadChildren: './feature-module/stimuli-module/stimuli.module#StimuliModule'
  },
  {
    path: '**', redirectTo: '/', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
