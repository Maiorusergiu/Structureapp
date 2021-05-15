import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FramesRoutingModule } from './frames-routing.module';
import { FramesComponent } from './frames.component';
import { ListFramesComponent } from './pages/list-frames/list-frames.component';
import { CreateFramesComponent } from './pages/create-frames/create-frames.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [FramesComponent, ListFramesComponent, CreateFramesComponent],
  imports: [
    CommonModule,
    FramesRoutingModule,
    SharedModule
  ],
  exports: [
    FramesComponent
  ]
})
export class FramesModule { }
