import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovementsComponent } from './movements.component';
import { CreateMovementsComponent } from './pages/create-movements/create-movements.component';
import { ListMovementsComponent } from './pages/list-movements/list-movements.component';

const routes: Routes = [

  {path: '', component: MovementsComponent, children: [

    {
      path: 'listMovements', component: ListMovementsComponent
    },
    {
      path: 'createMovements', component: CreateMovementsComponent
    },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovementsRoutingModule { }
