import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionsRoutingModule } from './sessions-routing.module';
import { ListSessionsComponent } from './pages/list-sessions/list-sessions.component';
import { CreateSessionsComponent } from './pages/create-sessions/create-sessions.component';
import { SessionsComponent } from './sessions.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [ ListSessionsComponent, CreateSessionsComponent, SessionsComponent],
  imports: [
    CommonModule,
    SessionsRoutingModule,
    SharedModule
  ],
  exports: [
    SessionsComponent
  ]
})
export class SessionsModule { }
