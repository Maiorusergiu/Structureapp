import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StimuliRoutingModule } from './stimuli-routing.module';
import { StimuliComponent } from './stimuli.component';
import { CreateStimuliComponent } from './pages/create-stimuli/create-stimuli.component';
import { ListStimuliComponent } from './pages/list-stimuli/list-stimuli.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';



@NgModule({
  declarations: [StimuliComponent, CreateStimuliComponent, ListStimuliComponent],
  imports: [
    CommonModule,
    StimuliRoutingModule,
    SharedModule
  ],
  exports: [
    StimuliComponent
  ]
})
export class StimuliModule { }
