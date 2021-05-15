import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateStimuliComponent } from './pages/create-stimuli/create-stimuli.component';
import { ListStimuliComponent } from './pages/list-stimuli/list-stimuli.component';
import { StimuliComponent } from './stimuli.component';

const routes: Routes = [
  {path: '', component: StimuliComponent, children: [
    {
      path: 'listStimuli', component: ListStimuliComponent
    },
    {
      path: 'createStimuli', component: CreateStimuliComponent
    },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StimuliRoutingModule { }
