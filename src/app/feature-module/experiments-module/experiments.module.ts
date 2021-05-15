import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperimentsRoutingModule } from './experiments-routing.module';
import { CreateExperimentsComponent } from './pages/create-experiments/create-experiments.component';
import { ListExperimentsComponent } from './pages/list-experiments/list-experiments.component';
import { ExperimentsComponent } from './experiments.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';



@NgModule({
  declarations: [CreateExperimentsComponent, ListExperimentsComponent, ExperimentsComponent],
  imports: [
    CommonModule,
    ExperimentsRoutingModule,
    SharedModule
  ],
  exports: [
    ExperimentsComponent
  ]
})
export class ExperimentsModule { }
