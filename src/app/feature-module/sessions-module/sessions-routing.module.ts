import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateSessionsComponent } from './pages/create-sessions/create-sessions.component';
import { ListSessionsComponent } from './pages/list-sessions/list-sessions.component';
import { SessionsComponent } from './sessions.component';

const routes: Routes = [

  {path: '', component: SessionsComponent, children: [

    {path: 'listSessions', component: ListSessionsComponent},
    {path: 'createSessions', component: CreateSessionsComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionsRoutingModule { }
