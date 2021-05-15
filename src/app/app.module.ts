import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExperimentsModule } from './feature-module/experiments-module/experiments.module';
import { DotsModule } from './feature-module/dots-module/dots.module';
import { FramesModule } from './feature-module/frames-module/frames.module';
import { MovementsModule } from './feature-module/movements-module/movements.module';
import { ParticipantsModule } from './feature-module/participants-module/participants.module';
import { SessionsModule } from './feature-module/sessions-module/sessions.module';
import { StimuliModule } from './feature-module/stimuli-module/stimuli.module';
import { SharedModule } from './shared/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ExperimentsModule,
    DotsModule,
    FramesModule,
    MovementsModule,
    ParticipantsModule,
    SessionsModule,
    StimuliModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
