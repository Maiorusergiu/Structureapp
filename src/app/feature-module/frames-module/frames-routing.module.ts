import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FramesComponent } from './frames.component';
import { ListFramesComponent } from './pages/list-frames/list-frames.component';
import { CreateFramesComponent } from './pages/create-frames/create-frames.component';

const routes: Routes = [
  {path: '', component: FramesComponent, children: [
    {
      path: 'listFrames', component: ListFramesComponent
    },
    {
      path: 'createFrames', component: CreateFramesComponent
    },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FramesRoutingModule { }
