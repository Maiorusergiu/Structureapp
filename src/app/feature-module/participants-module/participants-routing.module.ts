import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateParticipantsComponent } from './pages/create-participants/create-participants.component';
import { ListParticipantsComponent } from './pages/list-participants/list-participants.component';
import { ParticipantsComponent } from './participants.component';

const routes: Routes = [
  {path: '', component: ParticipantsComponent, children: [

    {path: 'listParticipants', component: ListParticipantsComponent},
    {path: 'createParticipants', component: CreateParticipantsComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParticipantsRoutingModule { }
