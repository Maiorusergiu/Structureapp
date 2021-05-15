import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DotsComponent } from './dots.component';
import { ListDotsComponent } from './pages/list-dots/list-dots.component';

const routes: Routes = [
  {path: '', component: DotsComponent, children: [

    {
      path: 'listDots', component: ListDotsComponent
    },

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DotsRoutingModule { }
