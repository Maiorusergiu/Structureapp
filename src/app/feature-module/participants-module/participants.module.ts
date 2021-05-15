import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParticipantsRoutingModule } from './participants-routing.module';
import { ParticipantsComponent } from './participants.component';
import { ListParticipantsComponent } from './pages/list-participants/list-participants.component';
import { CreateParticipantsComponent } from './pages/create-participants/create-participants.component';
import { ParticipantsService } from './services/participants.service';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [ParticipantsComponent, ListParticipantsComponent, CreateParticipantsComponent],
  imports: [
    CommonModule,
    ParticipantsRoutingModule,
    SharedModule

  ],
  exports: [ParticipantsComponent],
  providers:[ParticipantsService]
})
export class ParticipantsModule { }
