import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExperimentsComponent } from './experiments.component';
import { CreateExperimentsComponent } from './pages/create-experiments/create-experiments.component';
import { ListExperimentsComponent } from './pages/list-experiments/list-experiments.component';

const routes: Routes = [
  {path: '', component: ExperimentsComponent, children: [
    {
      path:'listExperiments', component: ListExperimentsComponent 
    },
    {
      path:'createExperiments', component: CreateExperimentsComponent
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExperimentsRoutingModule { }
